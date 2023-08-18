import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import styled from "styled-components";
import { getTabSelected, tabsConfig } from "./tabsConfig";

const AdminPanel = () => {
  const { currentTabSelected } = useContext(OrderContext);
  const tabs = tabsConfig;

  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.label}</AdminPanelStyled>;
};

const AdminPanelStyled = styled.div`
  background-color: tomato;
  height: 250px;
`;
export default AdminPanel;
