import styled from "styled-components";
import { theme } from "../../../../../../theme";

const EmptyBasket = () => {
  return <EmptyBasketStyled>Votre commande est vide</EmptyBasketStyled>;
};

const EmptyBasketStyled = styled.p`
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.P4};
  height: 100%;
  align-self: center;
`;
export default EmptyBasket;
