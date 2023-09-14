//components
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

//Style
import styled from "styled-components";
import { devices } from "../../../../enums/devices";
import { theme } from "../../../../theme";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRightSide />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 100%;
  padding: 1.5rem 5rem 1.5rem 3rem;

  @media ${devices.lg} {
    padding: 1rem 1.5rem;
  }
  @media ${devices.sm} {
    padding: 0.5rem 1rem;
  }
`;
