import { useParams } from "react-router-dom";
import { useState } from "react";
//components
import { Navbar } from "./Navbar/Navbar.jsx";
import Main from "./Main";

//style

import styled from "styled-components";
import { theme } from "../../../theme";
import AdminContext from "../../../context/OrderContext.js";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  };

  const { username } = useParams();

  return (
    <AdminContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </AdminContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  .container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    height: 94vh;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export default OrderPage;
