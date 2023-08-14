import { useState } from "react";
//components
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profil from "../Profil";

//utils

import { toastAdminModeNotify } from "../../../../utils/toast";

//style
import styled from "styled-components";

const NavbarRightSide = ({ username }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastAdminModeNotify = () => {
    if (!isModeAdmin) {
      toastAdminModeNotify();
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfChecked="Disable Admin Mode"
        labelIfUnchecked="Enable Admin Mode"
        onToggle={displayToastAdminModeNotify}
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
