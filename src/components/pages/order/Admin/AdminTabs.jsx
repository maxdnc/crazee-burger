import styled from "styled-components";
//component
import Tab from "../../../reusable-ui/Tab";

// Icon

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//context
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

// config
import { tabsConfig } from "./tabsConfig";

const AdminTabs = () => {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleTabSelected = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  const tabs = tabsConfig;
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className={isCollapsed ? "active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => {
            handleTabSelected(tab.index);
          }}
          className={currentTabSelected === tab.index ? "active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  background-color: blueviolet;
  display: flex;
`;
export default AdminTabs;
