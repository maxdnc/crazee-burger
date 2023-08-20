import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { getTabSelected, tabsConfig } from "../tabsConfig";

const AdminPanel = () => {
  const { currentTabSelected } = useContext(OrderContext);
  const tabs = tabsConfig;

  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.Content}</AdminPanelStyled>;
};

const AdminPanelStyled = styled.div`
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
export default AdminPanel;
