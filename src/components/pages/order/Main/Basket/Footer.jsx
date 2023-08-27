import { styled } from "styled-components";
import { theme } from "../../../../../theme";

const Footer = () => {
  return (
    <FooterStyled>
      <p>Codé avec ♥️ et React.JS </p>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: ${theme.colors.background_dark};

  p {
    color: ${theme.colors.white};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P2};
    font-weight: ${theme.weights.bold};
  }
`;
export default Footer;
