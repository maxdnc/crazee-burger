import { useState } from "react";
import {
  deepCopy,
  findInArrayById,
  findIndexById,
  removeInArrayById,
} from "../utils/array";

export const useBasketProduct = () => {
  const [basketProducts, setBasketProducts] = useState([]);

  const handleDeleteToBasket = (idBasketProduct) => {
    const basketProductsUpdated = removeInArrayById(
      basketProducts,
      idBasketProduct
    );
    setBasketProducts(basketProductsUpdated);
  };

  const handleIncrementQuantityProduct = (idBasketProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = findIndexById(basketProductsCopy, idBasketProduct);
    basketProductsCopy[productIndex].quantity += 1;
    setBasketProducts(basketProductsCopy);
  };

  const handleDecrementQuantityProduct = (idBasketProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = findIndexById(basketProductsCopy, idBasketProduct);
    basketProductsCopy[productIndex].quantity -= 1;
    setBasketProducts(basketProductsCopy);

    if (basketProductsCopy[productIndex].quantity < 1) {
      const basketProductUpdated = removeInArrayById(
        basketProductsCopy,
        idBasketProduct
      );
      setBasketProducts(basketProductUpdated);
    }
  };

  const handleAddToBasket = (productToAdd) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const isProductAlreadyInBasket = findInArrayById(
      basketProductsCopy,
      productToAdd.id
    );

    if (isProductAlreadyInBasket) {
      handleIncrementQuantityProduct(productToAdd.id);
    } else {
      addNewProductToBasket(
        productToAdd,
        basketProductsCopy,
        setBasketProducts
      );
    }
  };

  const addNewProductToBasket = (
    productToAdd,
    basketProductsCopy,
    setBasketProducts
  ) => {
    const newBasketProduct = { id: productToAdd.id, quantity: 1 };
    const basketProductUpdated = [newBasketProduct, ...basketProductsCopy];
    setBasketProducts(basketProductUpdated);
  };

  return {
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
    basketProducts,
    handleAddToBasket,
  };
};
