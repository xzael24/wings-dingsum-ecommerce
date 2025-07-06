import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
        }
        Update: {
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: number
          name: string
          slug: string
          description: string | null
          price: number
          original_price: number | null
          category_id: number | null
          image_url: string | null
          images: string[] | null
          ingredients: string[] | null
          rating: number
          review_count: number
          stock_quantity: number
          is_featured: boolean
          is_active: boolean
          badge: string | null
          created_at: string
          updated_at: string
        }
      }
      categories: {
        Row: {
          id: number
          name: string
          slug: string
          description: string | null
          image_url: string | null
          created_at: string
        }
      }
      orders: {
        Row: {
          id: number
          user_id: string
          order_number: string
          status: string
          subtotal: number
          shipping_cost: number
          tax_amount: number
          discount_amount: number
          total_amount: number
          shipping_address: any
          payment_method: string | null
          payment_status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
      }
      cart_items: {
        Row: {
          id: number
          user_id: string
          product_id: number
          quantity: number
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          product_id: number
          quantity?: number
        }
        Update: {
          quantity?: number
          updated_at?: string
        }
      }
    }
  }
}
