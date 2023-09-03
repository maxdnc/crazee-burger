//style
import styled from "styled-components";
import { theme } from "../../../../theme";

//component
import Basket from "./Basket/Basket.jsx";
import MainRightSide from "./MainRightSide/MainRightSide.jsx";

// context

const Main = () => {
  return (
    <MainStyled>
      <div className="container">
        <Basket />
        <MainRightSide />
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  width: 100%;
  overflow-y: scroll;
  height: 100%;

  .container {
    display: flex;
    align-items: start;
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
  }
`;
export default Main;
