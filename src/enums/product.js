export const EMPTY_PRODUCT = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
});

export const isProductSelected = (product) => {
  if (
    product.id === EMPTY_PRODUCT.id &&
    product.title === EMPTY_PRODUCT.title &&
    product.imageSource === EMPTY_PRODUCT.imageSource &&
    product.price === EMPTY_PRODUCT.price
  )
    return false;
  else {
    return true;
  }
};
