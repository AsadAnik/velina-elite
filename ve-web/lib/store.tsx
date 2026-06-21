"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { Product } from "./data";

// ─── Types ───────────────────────────────────────────────────────────────────

export type CartItem = {
  product: Product;
  quantity: number;
};

type State = {
  cart: CartItem[];
  wishlist: Product[];
  isCartDrawerOpen: boolean;
  lastAddedProduct: Product | null;
};

type Action =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QTY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_WISHLIST"; product: Product }
  | { type: "OPEN_CART_DRAWER" }
  | { type: "CLOSE_CART_DRAWER" };

// ─── Reducer ─────────────────────────────────────────────────────────────────

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find(
        (i) => i.product.id === action.product.id
      );
      const cart = existing
        ? state.cart.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...state.cart, { product: action.product, quantity: 1 }];
      return {
        ...state,
        cart,
        isCartDrawerOpen: true,
        lastAddedProduct: action.product,
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.product.id !== action.productId),
      };
    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((i) =>
            i.product.id === action.productId
              ? { ...i, quantity: action.quantity }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "TOGGLE_WISHLIST": {
      const inWishlist = state.wishlist.some((p) => p.id === action.product.id);
      return {
        ...state,
        wishlist: inWishlist
          ? state.wishlist.filter((p) => p.id !== action.product.id)
          : [...state.wishlist, action.product],
      };
    }
    case "OPEN_CART_DRAWER":
      return { ...state, isCartDrawerOpen: true };
    case "CLOSE_CART_DRAWER":
      return { ...state, isCartDrawerOpen: false };
    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

type StoreContextValue = State & {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQty: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  isInWishlist: (productId: number) => boolean;
  cartTotal: number;
  cartCount: number;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const initialState: State = {
  cart: [],
  wishlist: [],
  isCartDrawerOpen: false,
  lastAddedProduct: null,
};

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = useCallback(
    (product: Product) => dispatch({ type: "ADD_TO_CART", product }),
    []
  );
  const removeFromCart = useCallback(
    (productId: number) => dispatch({ type: "REMOVE_FROM_CART", productId }),
    []
  );
  const updateQty = useCallback(
    (productId: number, quantity: number) =>
      dispatch({ type: "UPDATE_QTY", productId, quantity }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), []);
  const toggleWishlist = useCallback(
    (product: Product) => dispatch({ type: "TOGGLE_WISHLIST", product }),
    []
  );
  const openCartDrawer = useCallback(
    () => dispatch({ type: "OPEN_CART_DRAWER" }),
    []
  );
  const closeCartDrawer = useCallback(
    () => dispatch({ type: "CLOSE_CART_DRAWER" }),
    []
  );
  const isInWishlist = useCallback(
    (productId: number) => state.wishlist.some((p) => p.id === productId),
    [state.wishlist]
  );

  const cartTotal = state.cart.reduce(
    (sum, i) => sum + i.product.salePrice * i.quantity,
    0
  );
  const cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        toggleWishlist,
        openCartDrawer,
        closeCartDrawer,
        isInWishlist,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
