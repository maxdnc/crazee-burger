import styled from "styled-components";
//component
import Tab from "../../../reusable-ui/Tab";

// Icon

import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const AdminTabs = () => {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown />} />
      <Tab label={"Ajouter un produit"} Icon={<AiOutlinePlus />} />
      <Tab label={"Modifier un produit"} Icon={<MdModeEditOutline />} />
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  background-color: blueviolet;
  display: flex;
`;
export default AdminTabs;
