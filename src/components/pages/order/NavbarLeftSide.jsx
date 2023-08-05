import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { refreshPage } from "../../../utils/window";

const NavbarLeftSide = () => {
  return (
    <NavbarLeftSideStyled>
      <Logo className={"logo-navbar"} onClick={() => refreshPage()} />
    </NavbarLeftSideStyled>
  );
};

const NavbarLeftSideStyled = styled.div`
  .logo-navbar {
    cursor: pointer;
  }
`;
export default NavbarLeftSide;
