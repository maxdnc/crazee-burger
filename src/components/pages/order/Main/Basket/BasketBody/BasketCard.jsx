import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
//icon
import { TbTrashXFilled } from "react-icons/tb";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

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
        <img src={imageSource ? imageSource : IMAGE_BY_DEFAULT} alt={title} />
      </div>
      <div className="container-info">
        <div className="container-title-price">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
        <div className="container-quantity">
          <button
            className="increment counting-button"
            onClick={incrementQuantity}
          >
            <MdOutlineKeyboardArrowUp className="icon" />
          </button>
          <p className="quantity">x {quantity}</p>
          <button
            className="decrement counting-button"
            onClick={decrementQuantity}
          >
            <MdOutlineKeyboardArrowDown className="icon" />
          </button>
        </div>
      </div>
      {isModeAdmin && (
        <button className="delete-button" onClick={deleteProduct}>
          <span>
            <TbTrashXFilled />
          </span>
        </button>
      )}
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
    .container-quantity {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;

      .quantity {
        margin: 0 auto;
        color: ${theme.colors.primary};
        font-size: 0.9375rem;
      }

      .counting-button {
        border: none;
        padding: 0;
        background: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        color: ${theme.colors.dark};
      }

      .increment {
        transition: transform 0.1s ease-in;
        cursor: pointer;
        &:hover {
          transform: scale(1.5);
        }
        .icon {
          transition: transform 0.1s ease-in, color 0.1s ease-in;

          &:active {
            transform: translateY(-5px);
            color: ${theme.colors.primary};
          }
        }
      }

      .decrement {
        transition: transform 0.1s ease-in;
        cursor: pointer;
        &:hover {
          transform: scale(1.5);
        }
        .icon {
          transition: transform 0.1s ease-in, color 0.1s ease-in;

          &:active {
            transform: translateY(5px);
            color: ${theme.colors.primary};
          }
        }
      }
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
`;
export default BasketCard;
