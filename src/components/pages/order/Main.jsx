import { useContext, useState } from "react";

//style
import styled from "styled-components";
import { theme } from "../../../theme";

//component

import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";

// context
import OrderContext from "../../../context/OrderContext";

const Main = () => {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <MainStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </MainStyled>
  );
};

const MainStyled = styled.main`
  flex: 1;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: auto;
`;
export default Main;
