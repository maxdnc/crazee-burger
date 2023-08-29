import styled from "styled-components";
import BasketCard from "./BasketCard/BasketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { formatPrice } from "../../../../../../utils/maths";
import { deepCopy, findInArray } from "../../../../../../utils/array";

const ProductsSelection = () => {
  const {
    basketProducts,
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
  } = useContext(OrderContext);

  return (
    <ProductsSelectionStyled>
      {basketProducts.map(({ id, title, price, imageSource, quantity }) => {
        return (
          <li key={id}>
            <BasketCard
              title={title}
              price={formatPrice(price)}
              imageSource={imageSource}
              deleteProduct={() => handleDeleteToBasket(id)}
              quantity={quantity}
              incrementQuantity={() => {
                handleIncrementQuantityProduct(id);
              }}
              decrementQuantity={() => {
                handleDecrementQuantityProduct(id);
              }}
            />
          </li>
        );
      })}
    </ProductsSelectionStyled>
  );
};

const ProductsSelectionStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: 1.25rem 1rem;
  list-style: none;
  margin-left: 0;
`;
export default ProductsSelection;
