import styled from "styled-components";
//component
import BasketCard from "./BasketCard/BasketCard";
//context
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
//utils
import { formatPrice } from "../../../../../../utils/maths";
import {
  checkIfSameProductIsSelected,
  findInArrayById,
} from "../../../../../../utils/array";

const ProductsSelection = () => {
  const {
    menuData,
    basketProducts,
    handleDeleteToBasket,
    handleIncrementQuantityProduct,
    handleDecrementQuantityProduct,
    isModeAdmin,
    selectedProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleDelete = (event, idBasketProduct) => {
    event.stopPropagation();
    handleDeleteToBasket(idBasketProduct);
  };

  const handleIncrement = (event, idBasketProduct) => {
    event.stopPropagation();
    handleIncrementQuantityProduct(idBasketProduct);
  };

  const handleDecrement = (event, idBasketProduct) => {
    event.stopPropagation();
    handleDecrementQuantityProduct(idBasketProduct);
  };

  return (
    <ProductsSelectionStyled>
      {basketProducts.map((basketProducts) => {
        const menuProduct = findInArrayById(menuData, basketProducts.id);
        return (
          <li key={basketProducts.id}>
            <BasketCard
              isSelected={checkIfSameProductIsSelected(
                basketProducts.id,
                selectedProduct.id
              )}
              isHoverable={isModeAdmin}
              onClick={
                isModeAdmin
                  ? () => handleProductSelected(basketProducts.id)
                  : null
              }
              title={menuProduct.title}
              price={formatPrice(menuProduct.price)}
              imageSource={menuProduct.imageSource}
              deleteProduct={(event) => handleDelete(event, basketProducts.id)}
              quantity={basketProducts.quantity}
              incrementQuantity={(event) => {
                handleIncrement(event, basketProducts.id);
              }}
              decrementQuantity={(event) => {
                handleDecrement(event, basketProducts.id);
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
