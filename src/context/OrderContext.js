import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  menuData: [],
  setMenuData: () => {},
  handleAddToMenu: () => {},
  handleDeleteToMenu: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  selectedProduct: {},
  setSelectedProduct: () => {},
});
