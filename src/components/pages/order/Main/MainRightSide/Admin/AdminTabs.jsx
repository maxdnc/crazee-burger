import styled from "styled-components";
//component
import Tab from "../../../../../reusable-ui/Tab.jsx";

// Icon

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//context
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

// config
import { getTabsConfig } from "./tabsConfig";
import { theme } from "../../../../../../theme/index.js";
import { devices } from "../../../../../../enums/devices.js";

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

  const tabs = getTabsConfig();
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
          key={tab.index}
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
  display: flex;
  gap: 1px;
  padding-left: 4.375rem;
  & > :first-child {
    border-top-left-radius: ${theme.borderRadius.extraRound};
  }
  & > :last-child {
    border-top-right-radius: ${theme.borderRadius.extraRound};
  }

  @media ${devices.md} {
    padding-left: 0;
    justify-content: center;
  }
`;
export default AdminTabs;
