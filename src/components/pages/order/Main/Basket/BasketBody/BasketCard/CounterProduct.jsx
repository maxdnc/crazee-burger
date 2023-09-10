import styled from "styled-components";
import { theme } from "../../../../../../../theme";
//icon
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import CasinoEffect from "../../../../../../reusable-ui/CasinoEffect";

const CounterProduct = ({ quantity, incrementQuantity, decrementQuantity }) => {
  return (
    <CounterProductStyled>
      <button className="increment counting-button" onClick={incrementQuantity}>
        <MdOutlineKeyboardArrowUp className="icon" />
      </button>
      <span className="quantity">
        x <CasinoEffect count={quantity} />
      </span>
      <button className="decrement counting-button" onClick={decrementQuantity}>
        <MdOutlineKeyboardArrowDown className="icon" />
      </button>
    </CounterProductStyled>
  );
};

const CounterProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .quantity {
    display: flex;
    gap: 2px;
    margin: 0 auto;
    color: ${theme.colors.primary};
    font-size: 0.9375rem;
    white-space: nowrap;
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
`;
export default CounterProduct;
