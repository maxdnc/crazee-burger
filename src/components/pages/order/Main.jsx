import styled from "styled-components";
import { theme } from "../../../theme";
import Menu from "./Menu";

const Main = () => {
  return (
    <MainStyled>
      <Menu />
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
