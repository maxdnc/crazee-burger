import { styled } from "styled-components";
import { theme } from "../../../../../theme";

const Body = () => {
  return (
    <BodyStyled>
      <p className="empty-basket">Votre commande est vide</p>
    </BodyStyled>
  );
};

const BodyStyled = styled.div`
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.P4};
`;
export default Body;
