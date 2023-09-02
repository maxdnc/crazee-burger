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

    if (isAProductSelected(selectedProduct)) {
      setIsCollapsed(false);
      setCurrentTabSelected("edit");
    } else {
      setCurrentTabSelected("add");
    }
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        onClick={handleToggleAdminMode}
        onToggle={handleToggleAdminMode}
        icon={isModeAdmin ? <FaUnlock /> : <FaLock />}
        isChecked={isModeAdmin}
      />
      <Profil username={username} />
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
`;

export default NavbarRightSide;
