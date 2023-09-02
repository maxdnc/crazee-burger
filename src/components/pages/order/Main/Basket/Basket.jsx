//style
import styled from "styled-components";
import { theme } from "../../../../../theme";

//component
import Total from "./Total.jsx";
import Footer from "./Footer";
import BasketBody from "./BasketBody/BasketBody";

const Basket = () => {
  return (
    <BasketStyled>
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
  height: calc(100vh - 108px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: ${theme.shadows.subtle};
  overflow: hidden;
`;
export default Basket;
