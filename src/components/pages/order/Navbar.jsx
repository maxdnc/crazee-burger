import { Link } from "react-router-dom";

import styled from "styled-components";

export const Navbar = ({ username }) => {
  return (
    <NavbarStyled>
      <div className="right-side">
        logo
        {/* <Logo /> */}
      </div>
      <div className="left-side">
        <h1>Hey {username}</h1>
        <Link to="/">
          <button>Log out</button>
        </Link>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  .right-side {
    /* transform: scale(0.4); */
  }
`;
