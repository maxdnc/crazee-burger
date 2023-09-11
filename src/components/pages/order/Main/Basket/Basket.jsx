//style
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { devices } from "../../../../../enums/devices";

//component
import Total from "./Total.jsx";
import Footer from "./Footer";
import BasketBody from "./BasketBody/BasketBody";

//content
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

const Basket = () => {
  const { isBasketSmallDevicesActive } = useContext(OrderContext);

  return (
    <BasketStyled $isBasketSmallDevicesActive={isBasketSmallDevicesActive}>
      <Total />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  max-width: 350px;
  width: 100%;
  position: sticky;
  top: 0;
  height: calc(100dvh - 108px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: ${theme.shadows.subtle};
  overflow: hidden;
  background-color: ${theme.colors.background_white};

  @media ${devices.lg} {
    height: calc(100dvh - 92px);
    position: absolute;
    z-index: 20;
    top: 92px;
    max-width: unset;
    transform: translateX(-100%);
    ${({ $isBasketSmallDevicesActive }) =>
      $isBasketSmallDevicesActive && isActiveStyle};
  }
  @media ${devices.sm} {
    height: calc(100dvh - 76px);
    top: 76px;
  }
`;

const isActiveStyle = css`
  transform: translateX(0%);
`;
export default Basket;
