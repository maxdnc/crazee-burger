import { Link } from "react-router-dom";

import styled from "styled-components";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      <h1>Hey {username}</h1>
      <Link to="/">
        <button>Log out</button>
      </Link>
    </NavbarRightSideStyled>
  );
};
const NavbarRightSideStyled = styled.div``;

export default NavbarRightSide;
