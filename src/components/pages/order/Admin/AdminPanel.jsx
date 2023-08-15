import { useState } from "react";
import styled from "styled-components";

const AdminPanel = () => {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <AdminPanelStyled className={openPanel ? "open-panel" : ""}>
      AdminPanel
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  background-color: tomato;
  &.open-panel {
    height: 250px;
  }
`;
export default AdminPanel;
