export const deepCopy = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (array, id) => {
  return array.find((itemInArray) => itemInArray.id === id);
};
