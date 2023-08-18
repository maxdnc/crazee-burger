import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

//context
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

const Admin = () => {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
`;

export default Admin;
