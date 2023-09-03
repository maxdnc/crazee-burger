import styled from "styled-components";
import { theme } from "../../../../../../theme";

const EmptyBasket = () => {
  return <EmptyBasketStyled>Your basket is empty</EmptyBasketStyled>;
};

const EmptyBasketStyled = styled.p`
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.P4};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default EmptyBasket;
