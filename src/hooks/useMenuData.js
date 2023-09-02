import { useState } from "react";
//utils
import { deepCopy, removeInArrayById } from "../utils/array";
//data
import { fakeMenu } from "../fakeData/fakeMenu";

//enums
import { EMPTY_PRODUCT } from "../enums/product";

export const useMenuData = () => {
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [menuData, setMenuData] = useState(fakeMenu.LARGE);

  const handleAddToMenu = (newProduct) => {
    const menuDataCopy = deepCopy(menuData);

    const menuDataUpdated = [newProduct, ...menuDataCopy];
    setMenuData(menuDataUpdated);
  };

  const handleDeleteToMenu = (idProductToDelete) => {
    const menuDataCopy = deepCopy(menuData);

    const menuUpdated = removeInArrayById(menuDataCopy, idProductToDelete);
    setMenuData(menuUpdated);
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
