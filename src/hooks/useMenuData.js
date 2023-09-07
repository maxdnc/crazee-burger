import { useState } from "react";
//utils
import { deepCopy, removeInArrayById } from "../utils/array";
//data
import { fakeMenu } from "../fakeData/fakeMenu";
//enums
import { EMPTY_PRODUCT } from "../enums/product";
//api
import { syncBothMenus } from "../api/product";

export const useMenuData = () => {
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [menuData, setMenuData] = useState(undefined);

  const handleAddToMenu = (newProduct, username) => {
    const menuDataCopy = deepCopy(menuData);
    const menuDataUpdated = [newProduct, ...menuDataCopy];
    setMenuData(menuDataUpdated);
    syncBothMenus(username, menuDataUpdated);
  };

  const handleDeleteToMenu = (idProductToDelete, username) => {
    const menuDataCopy = deepCopy(menuData);
    const menuDataUpdated = removeInArrayById(menuDataCopy, idProductToDelete);
    setMenuData(menuDataUpdated);
    syncBothMenus(username, menuDataUpdated);
  };

  const handleEditToMenu = (productBeingEdited) => {
    const menuDataCopy = deepCopy(menuData);
    const indexOfProducToEdit = menuData.indexOf(selectedProduct);
    menuDataCopy[indexOfProducToEdit] = productBeingEdited;
    setMenuData(menuDataCopy);
  };

  const resetMenu = () => {
    setMenuData(fakeMenu.LARGE);
  };
  return {
    menuData,
    setMenuData,
    handleAddToMenu,
    handleDeleteToMenu,
    handleEditToMenu,
    resetMenu,
    selectedProduct,
    setSelectedProduct,
    newProduct,
    setNewProduct,
  };
};
