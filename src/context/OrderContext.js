import { createContext } from "react";

export default createContext({
  username: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: "add",
  setCurrentTabSelected: () => {},

  menuData: [],
  setMenuData: () => {},

  handleAddToMenu: () => {},
  handleEditToMenu: () => {},
  handleDeleteToMenu: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  selectedProduct: {},
  setSelectedProduct: () => {},

  titleEditRef: {},

  basketProducts: {},
  setBasketProducts: () => {},

  handleAddToBasket: () => {},
  handleDeleteToBasket: () => {},
  handleIncrementQuantityProduct: () => {},
  handleDecrementQuantityProduct: () => {},

  handleProductSelected: () => {},

  isBasketSmallDevicesActive: false,
  setIsBasketSmallDevicesActive: () => {},
});
