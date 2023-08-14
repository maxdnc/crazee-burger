import styled from "styled-components";

import Tab from "../../../reusable-ui/Tab";

const AdminTabs = () => {
  return (
    <AdminTabsStyled>
      <Tab />
      <Tab />
      <Tab />
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  background-color: blueviolet;
  display: flex;
`;
export default AdminTabs;
