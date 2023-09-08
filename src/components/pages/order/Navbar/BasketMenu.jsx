import styled from "styled-components";
import { theme } from "../../../../theme";
//icon
import { SlBasket } from "react-icons/sl";
import { devices } from "../../../../enums/devices";
//context
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import CasinoEffect from "../../../reusable-ui/CasinoEffect";

const BasketMenu = () => {
  const {
    basketProducts,
    isBasketSmallDevicesActive,
    setIsBasketSmallDevicesActive,
  } = useContext(OrderContext);

  const emptyBasket = basketProducts.length === 0;

  const totalProductsInBasket = basketProducts.reduce(
    (total, basketProduct) => {
      total += basketProduct.quantity;
      return total;
    },
    0
  );

  const handleClick = () => {
    setIsBasketSmallDevicesActive(!isBasketSmallDevicesActive);
  };

  return (
    <BasketMenuStyled
      onClick={() => handleClick()}
      className={isBasketSmallDevicesActive && "active"}
    >
      {emptyBasket ? null : (
        <span className="total">
          <CasinoEffect count={totalProductsInBasket} />
        </span>
      )}
      <span className={"icon"}>
        <SlBasket />
      </span>
    </BasketMenuStyled>
  );
};

const BasketMenuStyled = styled.button`
  display: none;
  background: none;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  position: relative;
  padding: unset;
  margin-top: 1px;

  &.active {
    color: ${theme.colors.dark};

    .total {
      color: ${theme.colors.primary};
    }
  }
  @media ${devices.sm} {
    font-size: 1.5rem;
  }

  .total {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    transform: translate(50%, -75%);
    font-size: 0.8rem;
    top: 1px;
    right: 0;
    z-index: 1;
    color: ${theme.colors.dark};

    @media ${devices.sm} {
      font-size: 0.7rem;
    }

    border-radius: 50%;
    height: 16px;
    width: 16px;
  }

  @media ${devices.lg} {
    display: inline-flex;
  }
`;
export default BasketMenu;
