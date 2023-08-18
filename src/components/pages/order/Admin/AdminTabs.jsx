import styled from "styled-components";
//component
import Tab from "../../../reusable-ui/Tab";

// Icon

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

//context
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

const AdminTabs = () => {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext);

  const handleTabSelected = () => {
    setIsCollapsed(false);
  };
  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className={isCollapsed ? "active" : ""}
      />
      <Tab
        label={"Ajouter un produit"}
        Icon={<AiOutlinePlus />}
        onClick={handleTabSelected}
      />
      <Tab
        label={"Modifier un produit"}
        Icon={<MdModeEditOutline />}
        onClick={handleTabSelected}
      />
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  background-color: blueviolet;
  display: flex;
`;
export default AdminTabs;
