//components
import { useState } from "react";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profil from "../Profil";
import { toast } from "react-toastify";

//style
import styled from "styled-components";

const NavbarRightSide = ({ username }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const DisplayToastAdminModeNotify = () => {
    if (!isModeAdmin) {
      toast.info("Admin Mode Activated", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfChecked="Disable Admin Mode"
        labelIfUnchecked="Enable Admin Mode"
        onToggle={DisplayToastAdminModeNotify}
      />
      <Profil username={username} />
    </NavbarRightSideStyled>
  );
};
const NavbarRightSideStyled = styled.div`
  display: flex;
  gap: 3.75rem;
  align-items: center;

  .profil {
    background: tomato;
  }
`;

export default NavbarRightSide;
