import { EMPTY_PRODUCT } from "../enums/product";

export const isProductSelected = (product) => {
  if (product !== EMPTY_PRODUCT) return true;
  else {
    return false;
  }
};
