import { useParams } from "react-router-dom";
//components
import { Navbar } from "./Navbar";
import Main from "./Main";

//style

import styled from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {
  const { username } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <header>
          <Navbar username={username} />
        </header>
        <Main />
      </div>
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  background-color: orange;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    height: 94vh;
    border-radius: ${theme.borderRadius.extraRound};
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export default OrderPage;
