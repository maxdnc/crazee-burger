import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

const Admin = () => {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
  background-color: white;
`;

export default Admin;
