import { CartProvider } from "@/features/cart/context/CartContext";

export const AppProviders = ({ children }: any) => {
  return <CartProvider>{children}</CartProvider>;
};
