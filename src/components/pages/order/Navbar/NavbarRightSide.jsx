//components
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profil from "../Profil";

//Icon

//style
import styled from "styled-components";

const NavbarRightSide = ({ username }) => {
  return (
    <NavbarRightSideStyled>
      <ToggleButton />
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
