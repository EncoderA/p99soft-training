import { createContext, useContext, useReducer } from "react";

const CartContext = createContext<any>(null);

const reducer = (state: any[], action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter((_, i) => i !== action.index);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
