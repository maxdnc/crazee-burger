export const deepCopy = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArrayById = (array, id) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndexById = (array, idWithUnknowIndex) => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowIndex);
};

export const removeInArrayById = (array, idItemToRemove) => {
  return array.filter((itemToRemove) => itemToRemove.id !== idItemToRemove);
};

import { EMPTY_PRODUCT } from "../enums/product";
export const isAProductSelected = (product) => {
  if (product !== EMPTY_PRODUCT) return true;
  else {
    return false;
  }
};

export const checkIfSameProductIsSelected = (idProductA, idProductB) => {
  return idProductA === idProductB;
};
