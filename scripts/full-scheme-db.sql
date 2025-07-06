-- ===============================
-- FULL DATABASE SCHEMA - WINGS DINGSUM (FINAL)
-- ===============================

-- 1. TABLES
-- ===============================

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id),
  image_url TEXT,
  ingredients TEXT[],
  rating DECIMAL(2,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  stock_quantity INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  badge TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.product_variants (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  UNIQUE(product_id, name)
);

CREATE TABLE IF NOT EXISTS public.toppings (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price_mini DECIMAL(10,2),
  price_jumbo DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS public.addresses (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT DEFAULT 'US',
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.orders (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  order_number TEXT UNIQUE,
  status TEXT DEFAULT 'pending',
  subtotal DECIMAL(10,2) NOT NULL,
  shipping_cost DECIMAL(10,2) DEFAULT 0,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  discount_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  shipping_address JSONB,
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.reviews (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.cart_items (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- 2. RLS & POLICIES
-- ===============================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own profile' AND tablename = 'profiles'
  ) THEN
    EXECUTE format('CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id)');
  END IF;
END $$;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can update own profile' AND tablename = 'profiles'
  ) THEN
    EXECUTE format('CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id)');
  END IF;
END $$;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can insert own profile' AND tablename = 'profiles'
  ) THEN
    EXECUTE format('CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id)');
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can manage own addresses' AND tablename = 'addresses'
  ) THEN
    EXECUTE format('CREATE POLICY "Users can manage own addresses" ON addresses FOR ALL USING (auth.uid() = user_id)');
  END IF;
END $$;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own orders' AND tablename = 'orders'
  ) THEN
    EXECUTE format('CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (auth.uid() = user_id)');
  END IF;
END $$;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can create own orders' AND tablename = 'orders'
  ) THEN
    EXECUTE format('CREATE POLICY "Users can create own orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id)');
  END IF;
END
$$;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Users can view own order items' AND tablename = 'order_items'
  ) THEN
    EXECUTE format($f$
      CREATE POLICY "Users can view own order items" ON order_items FOR SELECT USING (
        EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
      )
    $f$);
  END IF;
END
$$;



-- 3. FUNCTIONS & TRIGGERS
-- ===============================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


CREATE OR REPLACE FUNCTION update_product_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE products SET
    rating = (SELECT COALESCE(AVG(rating), 0) FROM reviews WHERE product_id = COALESCE(NEW.product_id, OLD.product_id)),
    review_count = (SELECT COUNT(*) FROM reviews WHERE product_id = COALESCE(NEW.product_id, OLD.product_id))
  WHERE id = COALESCE(NEW.product_id, OLD.product_id);
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE orders SET order_number = 'WD' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(NEW.id::TEXT, 4, '0')
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- 4. SEED MENU DIMSUM TERBARU
-- ===============================

DELETE FROM product_variants;
DELETE FROM products;
DELETE FROM categories WHERE slug != 'dimsum';

INSERT INTO categories (name, slug, description)
VALUES ('Dimsum', 'dimsum', 'Steamed or pan-fried bite-sized dumplings')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (name, slug, description, category_id, image_url, ingredients, stock_quantity, is_active, is_featured, badge)
VALUES (
  'Dimsum Mentai Tobiko', 'dimsum-mentai-tobiko', 'Dimsum dengan saus mentai dan tobiko',
  (SELECT id FROM categories WHERE slug = 'dimsum'), NULL, NULL, 0, TRUE, TRUE, 'Best Seller'
);

INSERT INTO products (name, slug, description, category_id, image_url, ingredients, stock_quantity, is_active, is_featured, badge)
VALUES
('Dimsum Tartar', 'dimsum-tartar', 'Dimsum dengan saus tartar', (SELECT id FROM categories WHERE slug = 'dimsum'), NULL, NULL, 0, TRUE, FALSE, NULL),
('Dimsum Saus Keju', 'dimsum-saus-keju', 'Dimsum dengan saus keju', (SELECT id FROM categories WHERE slug = 'dimsum'), NULL, NULL, 0, TRUE, FALSE, NULL),
('Dimsum Saus Bolognese', 'dimsum-saus-bolognese', 'Dimsum dengan saus bolognese', (SELECT id FROM categories WHERE slug = 'dimsum'), NULL, NULL, 0, TRUE, FALSE, NULL),
('Dimsum Ori', 'dimsum-ori', 'Dimsum original tanpa saus', (SELECT id FROM categories WHERE slug = 'dimsum'), NULL, NULL, 0, TRUE, FALSE, NULL);

-- Varian
INSERT INTO product_variants (product_id, name, quantity, price)
SELECT id, 'Mini', 6, 20000
FROM products
WHERE slug IN ('dimsum-mentai-tobiko','dimsum-tartar','dimsum-saus-keju','dimsum-saus-bolognese');

INSERT INTO product_variants (product_id, name, quantity, price)
SELECT id, 'Medium', 6, 27000
FROM products
WHERE slug IN ('dimsum-mentai-tobiko','dimsum-tartar','dimsum-saus-keju','dimsum-saus-bolognese');

INSERT INTO product_variants (product_id, name, quantity, price)
SELECT id, 'Jumbo', 16, 65000
FROM products
WHERE slug IN ('dimsum-mentai-tobiko','dimsum-tartar','dimsum-saus-keju','dimsum-saus-bolognese');

INSERT INTO product_variants (product_id, name, quantity, price)
SELECT id, 'Mini', 6, 15000
FROM products
WHERE slug = 'dimsum-ori';

INSERT INTO product_variants (product_id, name, quantity, price)
SELECT id, 'Medium', 6, 20000
FROM products
WHERE slug = 'dimsum-ori';

INSERT INTO product_variants (product_id, name, quantity, price)
SELECT id, 'Jumbo', 16, 55000
FROM products
WHERE slug = 'dimsum-ori';


-- Topping
INSERT INTO toppings (name, price_mini, price_jumbo) VALUES
('Mozarella', 2000, 5000),
('Cheddar', 1000, 2000),
('Quick Melt', 2000, 5000)
ON CONFLICT DO NOTHING;