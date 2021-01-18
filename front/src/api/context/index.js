import { createContext, useContext } from "react";

export const ShopContext = createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};
