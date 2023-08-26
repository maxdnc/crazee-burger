import { useContext, useState } from "react";
//components
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profil from "../Profil";

//utils
import { toastAdminModeNotify } from "../../../../utils/toast";

//style
import styled from "styled-components";

//Context
import OrderContext from "../../../../context/OrderContext";

//helper

import { isProductSelected } from "../../../../utils/isProductSelected";

const NavbarRightSide = ({ username }) => {
  const {
    isModeAdmin,
    setIsModeAdmin,
    selectedProduct,
    setCurrentTabSelected,
    setIsCollapsed,
  } = useContext(OrderContext);

  const handleToggleAdminMode = () => {
    const displayToastAdminModeNotify = () => {
      if (!isModeAdmin) {
        toastAdminModeNotify();
      }
    };

    displayToastAdminModeNotify();
    setIsModeAdmin(!isModeAdmin);

    if (isProductSelected(selectedProduct)) {
      setIsCollapsed(false);
      setCurrentTabSelected("edit");
    } else {
      setCurrentTabSelected("add");
    }
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfChecked="Disable Admin Mode"
        labelIfUnchecked="Enable Admin Mode"
        onToggle={handleToggleAdminMode}
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
