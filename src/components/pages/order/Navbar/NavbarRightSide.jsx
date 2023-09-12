import { useContext } from "react";
//components
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profil from "../Profil";

//utils
import { toastAdminModeNotify } from "../../../../utils/toast";

//style
import styled from "styled-components";
import { devices } from "../../../../enums/devices";

//Context
import OrderContext from "../../../../context/OrderContext";

//helper
import { isAProductSelected } from "../../../../utils/array";

//icon
import { FaLock, FaUnlock } from "react-icons/fa";
import BasketMenu from "./BasketMenu";

const NavbarRightSide = () => {
  const {
    username,
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

    if (isAProductSelected(selectedProduct)) {
      setIsCollapsed(false);
      setCurrentTabSelected("edit");
    } else {
      setCurrentTabSelected("add");
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem(username);
  };

  return (
    <NavbarRightSideStyled>
      <BasketMenu />

      <ToggleButton
        onClick={handleToggleAdminMode}
        onToggle={handleToggleAdminMode}
        icon={isModeAdmin ? <FaUnlock /> : <FaLock />}
        isChecked={isModeAdmin}
      />
      <Profil onClick={handleLogOut} username={username} />
    </NavbarRightSideStyled>
  );
};
const NavbarRightSideStyled = styled.div`
  display: flex;
  gap: 3.75rem;
  align-items: center;

  @media ${devices.lg} {
    gap: 2rem;
  }
  @media ${devices.sm} {
    gap: 1.5rem;
  }
`;

export default NavbarRightSide;
