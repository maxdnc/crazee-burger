import styled from "styled-components";
import { theme } from "../../theme";
import burgerLogo from "/images/logo-orange.png";

const Logo = ({ className, onClick }) => {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <span>CRAZEE</span>
      <img src={burgerLogo} alt="crazee house burger" />
      <span>BURGER</span>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xxs};

  img {
    width: 80px;
    height: 60px;
  }

  span {
    color: ${theme.colors.primary_burger};
    font-size: ${theme.fonts.P4};
    font-family: ${theme.fontsFamily.amatic};
    font-weight: ${theme.weights.bold};
  }
`;

export default Logo;
