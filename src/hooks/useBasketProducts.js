import { useState } from "react";
import {
  deepCopy,
  findInArrayById,
  findIndexById,
  removeInArrayById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasketProduct = () => {
  const [basketProducts, setBasketProducts] = useState([]);

  const handleDeleteToBasket = (idBasketProduct) => {
    const basketProductsUpdated = removeInArrayById(
      basketProducts,
      idBasketProduct
    );
    setBasketProducts(basketProductsUpdated);
  };

  const handleIncrementQuantityProduct = (idBasketProduct, username) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = findIndexById(basketProductsCopy, idBasketProduct);
    basketProductsCopy[productIndex].quantity += 1;
    setBasketProducts(basketProductsCopy);
    setLocalStorage(username, basketProductsCopy);
  };

  const handleDecrementQuantityProduct = (idBasketProduct, username) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = findIndexById(basketProductsCopy, idBasketProduct);
    basketProductsCopy[productIndex].quantity -= 1;
    setBasketProducts(basketProductsCopy);
    setLocalStorage(username, basketProductsCopy);

    if (basketProductsCopy[productIndex].quantity < 1) {
      const basketProductUpdated = removeInArrayById(
        basketProductsCopy,
        idBasketProduct
      );
      setBasketProducts(basketProductUpdated);
      setLocalStorage(username, basketProductUpdated);
    }
  };

  const handleAddToBasket = (productToAdd, username) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const isProductAlreadyInBasket = findInArrayById(
      basketProductsCopy,
      productToAdd.id
    );

    if (isProductAlreadyInBasket) {
      handleIncrementQuantityProduct(productToAdd.id, username);
    } else {
      addNewProductToBasket(
        productToAdd,
        basketProductsCopy,
        setBasketProducts,
        username
      );
    }
  };

  const addNewProductToBasket = (
    productToAdd,
    basketProductsCopy,
    setBasketProducts,
    username
  ) => {
    const newBasketProduct = { id: productToAdd.id, quantity: 1 };
    const basketProductUpdated = [newBasketProduct, ...basketProductsCopy];
    setBasketProducts(basketProductUpdated);
    setLocalStorage(username, basketProductUpdated);
  };

  return {
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
    basketProducts,
    handleAddToBasket,
    setBasketProducts,
  };
};
