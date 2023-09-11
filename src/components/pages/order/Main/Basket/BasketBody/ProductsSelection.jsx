import React, { useContext, useRef } from "react";
//Style
import styled from "styled-components";
import { devices } from "../../../../../../enums/devices";
//animation
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animation";
//component
import BasketCard from "./BasketCard/BasketCard";
//context
import OrderContext from "../../../../../../context/OrderContext";
//utils
import { formatPrice } from "../../../../../../utils/maths";
import {
  checkIfSameProductIsSelected,
  findInArrayById,
} from "../../../../../../utils/array";
import { convertStringToBoolean } from "../../../../../../utils/string";

const ProductsSelection = () => {
  const {
    username,
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
    handleDeleteToBasket(idBasketProduct, username);
  };

  const handleIncrement = (event, idBasketProduct) => {
    event.stopPropagation();
    handleIncrementQuantityProduct(idBasketProduct, username);
  };

  const handleDecrement = (event, idBasketProduct) => {
    event.stopPropagation();
    handleDecrementQuantityProduct(idBasketProduct, username);
  };

  return (
    <TransitionGroup component={ProductsSelectionStyled}>
      {basketProducts.map((basketProducts) => {
        const menuProduct = findInArrayById(menuData, basketProducts.id);

        return (
          <CSSTransition
            classNames={"animated-basket-card"}
            key={basketProducts.id}
            timeout={200}
            appear={true}
            exit={true}
          >
            <li>
              <BasketCard
                className={"basket-card"}
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
                price={
                  convertStringToBoolean(menuProduct.isAvailable)
                    ? formatPrice(menuProduct.price)
                    : "Sold Out"
                }
                imageSource={menuProduct.imageSource}
                deleteProduct={(event) =>
                  handleDelete(event, basketProducts.id)
                }
                quantity={basketProducts.quantity}
                incrementQuantity={(event) => {
                  handleIncrement(event, basketProducts.id);
                }}
                decrementQuantity={(event) => {
                  handleDecrement(event, basketProducts.id);
                }}
              />
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const ProductsSelectionStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem 1rem;
  list-style: none;
  margin-left: 0;
  width: 100%;
  overflow: hidden;

  @media ${devices.lg} {
    padding: 1.25rem 6.25rem;
  }
  @media ${devices.sm} {
    padding: 1.25rem 1rem;
  }

  ${basketAnimation}
`;
export default ProductsSelection;
