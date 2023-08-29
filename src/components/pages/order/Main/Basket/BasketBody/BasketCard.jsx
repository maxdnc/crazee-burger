import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { TbTrashXFilled } from "react-icons/tb";

const BasketCard = ({
  title,
  price,
  imageSource,
  quantity,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
}) => {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <BasketCardStyled>
      <div className="container-img">
        <img src={imageSource} alt={title} />
      </div>
      <div className="container-info">
        <div className="container-title-price">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
        <p className="number-item">x {quantity}</p>
      </div>
      {isModeAdmin && (
        <button className="delete-button" onClick={deleteProduct}>
          <span>
            <TbTrashXFilled />
          </span>
        </button>
      )}

      <button className="plus" onClick={incrementQuantity}>
        +
      </button>
      <button className="less" onClick={decrementQuantity}>
        -
      </button>
    </BasketCardStyled>
  );
};

const BasketCardStyled = styled.div`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.round};
  height: 86px;
  padding: 0.5rem 1rem;
  position: relative;
  overflow: hidden;

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
    align-items: center;

    .container-title-price {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      width: 120px;

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

    .number-item {
      margin: 0 auto;
      color: ${theme.colors.primary};
      font-size: 0.9375rem;
    }
  }

  .delete-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 76px;
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    cursor: pointer;
    transform-origin: right;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out, color ease-out 0.2s;
    font-size: 1.5rem;

    &:hover {
      color: ${theme.colors.dark};
    }
    &:active {
      color: ${theme.colors.white};
    }
  }

  .plus {
    position: absolute;
    left: 10px;
    max-width: 30px;
  }
  .less {
    position: absolute;
    left: 50px;
    max-width: 30px;
  }
`;
export default BasketCard;
