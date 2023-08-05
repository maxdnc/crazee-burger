//components
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

//Style
import styled from "styled-components";

export const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  padding: 1.5rem 4.5rem 1.5rem 1.25rem;
`;
