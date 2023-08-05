//components
import Profil from "./Profil";

//Icon

//style
import styled from "styled-components";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin button</div> */}
      <Profil username={username} />
    </NavbarRightSideStyled>
  );
};
const NavbarRightSideStyled = styled.div`
  display: flex;
  gap: 3.75rem;
  align-items: center;

  /* .admin-button {
    background: #000;
    color: white;
  } */
  .profil {
    background: tomato;
  }
`;

export default NavbarRightSide;
