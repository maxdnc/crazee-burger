import { useState } from "react";
import { deepCopy, findInArray } from "../utils/array";

export const useBasketProduct = () => {
  const [basketProducts, setBasketProducts] = useState([]);

  const handleDeleteToBasket = (idBasketProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const basketProductsUpdated = basketProductsCopy.filter(
      (basketProduct) => basketProduct.id !== idBasketProduct
    );
    setBasketProducts(basketProductsUpdated);
  };

  const handleIncrementQuantityProduct = (idBasketProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = basketProductsCopy.findIndex(
      (basketProduct) => basketProduct.id === idBasketProduct
    );
    basketProductsCopy[productIndex].quantity += 1;
    setBasketProducts(basketProductsCopy);
  };

  const handleDecrementQuantityProduct = (idBasketProduct) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = basketProductsCopy.findIndex(
      (basketProduct) => basketProduct.id === idBasketProduct
    );
    basketProductsCopy[productIndex].quantity -= 1;
    setBasketProducts(basketProductsCopy);

    if (basketProductsCopy[productIndex].quantity < 1) {
      const basketProductUpdated = basketProductsCopy.filter(
        (product) => product.id !== idBasketProduct
      );
      setBasketProducts(basketProductUpdated);
    }
  };

  const handleAddToBasket = (productToAdd) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const isProductAlreadyInBasket = findInArray(
      basketProductsCopy,
      productToAdd.id
    );

    if (isProductAlreadyInBasket) {
      const productIndex = basketProductsCopy.findIndex(
        (product) => product.id === productToAdd.id
      );

      basketProductsCopy[productIndex].quantity += 1;
      setBasketProducts(basketProductsCopy);
    } else {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const basketProductUpdated = [newBasketProduct, ...basketProductsCopy];
      setBasketProducts(basketProductUpdated);
    }
  };

  return {
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
    basketProducts,
    handleAddToBasket,
  };
};
