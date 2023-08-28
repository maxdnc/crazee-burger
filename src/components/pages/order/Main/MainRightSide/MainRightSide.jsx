import { useContext } from "react";
import Menu from "./Menu/Menu";
import OrderContext from "../../../../../context/OrderContext";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Admin from "./Admin/Admin.jsx";

const MainRightSide = () => {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </MainRightSideStyled>
  );
};

const MainRightSideStyled = styled.div`
  flex: 1;
`;
export default MainRightSide;
