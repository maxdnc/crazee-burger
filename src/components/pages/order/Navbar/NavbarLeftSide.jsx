import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo.jsx";
import { refreshPage } from "../../../../utils/window";
import { devices } from "../../../../enums/devices.js";

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

    @media ${devices.sm} {
      span {
        display: none;
      }
      img {
        transform: scale(0.75);
      }
    }
  }
`;
export default NavbarLeftSide;
