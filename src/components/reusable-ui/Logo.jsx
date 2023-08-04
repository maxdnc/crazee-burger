import styled from "styled-components";
import { theme } from "../../theme";

const Logo = () => {
  return (
    <LogoStyled>
      <span>CRAZEE</span>
      <img src="./images/logo-orange.png" alt="crazee house burger" />
      <span>BURGER</span>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};

  img {
    max-width: 200px;
  }

  span {
    color: ${theme.colors.primary_burger};
    font-size: ${theme.fonts.P7};
    font-family: ${theme.fontsFamily.amatic};
    font-weight: ${theme.weights.bold};
  }
`;

export default Logo;
