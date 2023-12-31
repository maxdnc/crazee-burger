import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { devices } from "../../../../../../../enums/devices";
import { getTabSelected, getTabsConfig } from "../tabsConfig";
import { isAProductSelected } from "../../../../../../../utils/array";

const AdminPanel = () => {
  const { currentTabSelected, selectedProduct } = useContext(OrderContext);
  const tabs = getTabsConfig(isAProductSelected(selectedProduct));
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.Content}</AdminPanelStyled>;
};

const AdminPanelStyled = styled.div`
  height: 250px;

  border-top-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 1.875rem 4.5rem 1rem 4.5rem;

  @media ${devices.md} {
    height: calc(100dvh - 92px - 46px);
    padding: 1rem;
    border-top-left-radius: ${theme.borderRadius.extraRound};
  }
  @media ${devices.sm} {
    height: calc(100dvh - 76px - 46px);
  }
`;
export default AdminPanel;
