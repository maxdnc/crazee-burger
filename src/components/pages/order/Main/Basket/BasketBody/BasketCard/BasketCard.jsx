import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../../../theme";
import { devices } from "../../../../../../../enums/devices";

//component
import CounterProduct from "./CounterProduct";
import DeleteButton from "./DeleteButton";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const BasketCard = ({
  title,
  price,
  imageSource,
  quantity,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
  onClick,
  isHoverable,
  isSelected,
  className,
}) => {
  return (
    <BasketCardStyled
      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
      className={className}
    >
      <div className="container-img">
        <img src={imageSource ? imageSource : IMAGE_BY_DEFAULT} alt={title} />
      </div>
      <div className="container-info">
        <div className="container-title-price">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
        <CounterProduct
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      <DeleteButton className={"delete-button"} onClick={deleteProduct} />
    </BasketCardStyled>
  );
};

const BasketCardStyled = styled.div`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  box-shadow: ${theme.shadows.small};
  border-radius: ${theme.borderRadius.round};
  height: 86px;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1rem;
  position: relative;
  overflow: hidden;
  max-width: 318px;
  width: 100%;

  @media ${devices.lg} {
    max-width: unset;
  }

  .delete-button {
    z-index: 2;
  }

  &:hover {
    .delete-button {
      transform: translateX(0);
    }
  }

  .container-img {
    justify-self: center;
    img {
      width: 85px;
      height: 70px;
      object-fit: contain;
    }
  }
  .container-info {
    display: flex;
    padding-left: 1rem;

    .container-title-price {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      max-width: 120px;
      width: 100%;

      .title {
        font-family: ${theme.fontsFamily.amatic};
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.P3};
        font-weight: ${theme.weights.bold};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        color: ${theme.colors.primary};
        font-size: 0.9375rem;
      }
    }
  }
  ${({ $isHoverable }) => $isHoverable && hoverableStyle};
  ${({ $isHoverable, $isSelected }) =>
    $isHoverable & $isSelected && selectedStyle}
`;

const selectedStyle = css`
  background-color: ${theme.colors.primary};
  .container-info {
    .quantity {
      color: ${theme.colors.white};
    }
    .container-title-price {
      .price {
        color: ${theme.colors.white};
      }
    }
  }
`;

const hoverableStyle = css`
  cursor: pointer;
`;

export default BasketCard;
