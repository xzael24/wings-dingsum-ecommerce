"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "./auth-context"

interface CartItem {
  id: number
  product_id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  total: number
  isLoading: boolean
}

type CartAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ITEMS"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }

const CartContext = createContext<
  | {
      state: CartState
      dispatch: React.Dispatch<CartAction>
      items: CartItem[]
      addItem: (item: Omit<CartItem, "quantity">) => Promise<void>
      removeItem: (productId: number) => Promise<void>
      updateQuantity: (productId: number, quantity: number) => Promise<void>
      clearCart: () => Promise<void>
      total: number
      isLoading: boolean
      syncCart: () => Promise<void>
    }
  | undefined
>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload }

    case "SET_ITEMS": {
      const items = action.payload
      return {
        ...state,
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        isLoading: false,
      }
    }

    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.product_id === action.payload.product_id)
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product_id === action.payload.product_id ? { ...item, quantity: item.quantity + 1 } : item,
        )
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }
      } else {
        const newItems = [...state.items, { ...action.payload, quantity: 1 }]
        return {
          ...state,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.product_id !== action.payload)
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }
    }

    case "UPDATE_QUANTITY": {
      const updatedItems = state.items
        .map((item) => (item.product_id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item))
        .filter((item) => item.quantity > 0)
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }
    }

    case "CLEAR_CART":
      return { ...state, items: [], total: 0 }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    isLoading: false,
  })
  const { user } = useAuth()

  // Sync cart with database when user logs in
  useEffect(() => {
    if (user) {
      syncCart()
    } else {
      // Clear cart when user logs out
      dispatch({ type: "CLEAR_CART" })
    }
  }, [user])

  const syncCart = async () => {
    if (!user) return

    dispatch({ type: "SET_LOADING", payload: true })

    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select(`
          id,
          product_id,
          quantity,
          products (
            name,
            price,
            image_url
          )
        `)
        .eq("user_id", user.id)

      if (error) throw error

      const cartItems: CartItem[] = data.map((item: any) => ({
        id: item.id,
        product_id: item.product_id,
        name: item.products.name,
        price: item.products.price,
        quantity: item.quantity,
        image: item.products.image_url,
      }))

      dispatch({ type: "SET_ITEMS", payload: cartItems })
    } catch (error) {
      console.error("Error syncing cart:", error)
      dispatch({ type: "SET_LOADING", payload: false })
    }
  }

  const addItem = async (item: Omit<CartItem, "quantity">) => {
    if (!user) {
      // For non-logged in users, use local state
      dispatch({ type: "ADD_ITEM", payload: item })
      return
    }

    try {
      const { data, error } = await supabase
        .from("cart_items")
        .upsert(
          {
            user_id: user.id,
            product_id: item.product_id,
            quantity: 1,
          },
          {
            onConflict: "user_id,product_id",
          },
        )
        .select()

      if (error) throw error

      // Refresh cart
      await syncCart()
    } catch (error) {
      console.error("Error adding item to cart:", error)
      // Fallback to local state
      dispatch({ type: "ADD_ITEM", payload: item })
    }
  }

  const removeItem = async (productId: number) => {
    if (!user) {
      dispatch({ type: "REMOVE_ITEM", payload: productId })
      return
    }

    try {
      const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id).eq("product_id", productId)

      if (error) throw error

      dispatch({ type: "REMOVE_ITEM", payload: productId })
    } catch (error) {
      console.error("Error removing item from cart:", error)
    }
  }

  const updateQuantity = async (productId: number, quantity: number) => {
    if (!user) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } })
      return
    }

    if (quantity <= 0) {
      await removeItem(productId)
      return
    }

    try {
      const { error } = await supabase
        .from("cart_items")
        .update({ quantity, updated_at: new Date().toISOString() })
        .eq("user_id", user.id)
        .eq("product_id", productId)

      if (error) throw error

      dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } })
    } catch (error) {
      console.error("Error updating cart quantity:", error)
    }
  }

  const clearCart = async () => {
    if (!user) {
      dispatch({ type: "CLEAR_CART" })
      return
    }

    try {
      const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id)

      if (error) throw error

      dispatch({ type: "CLEAR_CART" })
    } catch (error) {
      console.error("Error clearing cart:", error)
    }
  }

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total: state.total,
        isLoading: state.isLoading,
        syncCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
