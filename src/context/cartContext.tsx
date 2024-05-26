"use client";

import React from "react";
import { Skin } from "@/types/skins.t";

type CartState = {
  items: Skin[];
};

type AddAction = {
  type: "ADD";
  payload: { items: Skin[] };
};

type RemoveAction = {
  type: "REMOVE";
  payload: { id: number };
};

type ClearAction = {
  type: "CLEAR";
};

type CartAction = AddAction | RemoveAction | ClearAction;

type CartContextType = {
  items: Skin[];
  dispatch: React.Dispatch<CartAction>;
};

const initialCartState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, ...action.payload.items],
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR":
      return {
        ...state,
        items: [],
      };
    default:
      throw new Error("No case for that type");
  }
};

export const CartContext = React.createContext<CartContextType>({
  items: initialCartState.items,
  dispatch: () => undefined,
});

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = React.useReducer(cartReducer, initialCartState);

  const value = React.useMemo(
    () => ({ items: state.items, dispatch }),
    [state.items, dispatch]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
