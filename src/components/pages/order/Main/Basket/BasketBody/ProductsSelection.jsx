import styled from "styled-components";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { formatPrice } from "../../../../../../utils/maths";
import { deepCopy, findInArray } from "../../../../../../utils/array";

const ProductsSelection = () => {
  const { basketProducts, setBasketProducts } = useContext(OrderContext);

  const handleDeleteProduct = (id) => {
    const basketProductsCopy = deepCopy(basketProducts);
    // if (productQuantity > 1) {
    //   const productIndex = basketProductsCopy.findIndex(
    //     (product) => product.id === id
    //   );
    //   basketProductsCopy[productIndex].quantity -= 1;
    //   setBasketProducts(basketProductsCopy);
    // } else {
    const basketProductUpdated = basketProductsCopy.filter(
      (product) => product.id !== id
    );
    setBasketProducts(basketProductUpdated);
  };
  const handleIncrementQuantityProduct = (id) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = basketProductsCopy.findIndex((item) => item.id === id);
    basketProductsCopy[productIndex].quantity += 1;
    setBasketProducts(basketProductsCopy);
  };

  const handleDecrementQuantityProduct = (id) => {
    const basketProductsCopy = deepCopy(basketProducts);
    const productIndex = basketProductsCopy.findIndex((item) => item.id === id);
    basketProductsCopy[productIndex].quantity -= 1;
    setBasketProducts(basketProductsCopy);

    if (basketProductsCopy[productIndex].quantity < 1) {
      const basketProductUpdated = basketProductsCopy.filter(
        (product) => product.id !== id
      );
      setBasketProducts(basketProductUpdated);
    }
  };

  return (
    <ProductsSelectionStyled>
      {basketProducts.map((product) => {
        return (
          <li key={product.id}>
            <BasketCard
              title={product.title}
              price={formatPrice(product.price)}
              imageSource={product.imageSource}
              quantity={product.quantity}
              deleteProduct={() => handleDeleteProduct(product.id)}
              incrementQuantity={() => {
                handleIncrementQuantityProduct(product.id);
              }}
              decrementQuantity={() => {
                handleDecrementQuantityProduct(product.id);
              }}
            />
          </li>
        );
      })}
    </ProductsSelectionStyled>
  );
};

const ProductsSelectionStyled = styled.ul`
  display: grid;
  gap: 1.25rem;
  padding: 1.25rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(318px, 1fr));
  list-style: none;
  margin-left: 0;
`;
export default ProductsSelection;
