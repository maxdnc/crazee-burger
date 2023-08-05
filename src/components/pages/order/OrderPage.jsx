import { Link, useParams } from "react-router-dom";

//components

//style

import styled from "styled-components";
import { theme } from "../../../theme";
import Logo from "../../reusable-ui/Logo";

const OrderPage = () => {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <header>
          <nav>
            <div className="right-side">
              logo
              {/* <Logo /> */}
            </div>
            <div className="left-side">
              <h1>Hey {username}</h1>
              <Link to="/">
                <button>Log out</button>
              </Link>
            </div>
          </nav>
        </header>
        <main>main</main>
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

    header {
      background-color: white;
      width: 100%;
      padding: 2rem 1.5rem;

      nav {
        display: flex;
        justify-content: space-between;

        .right-side {
          /* transform: scale(0.4); */
        }
      }
    }

    main {
      background-color: green;
      flex: 1;
    }
  }
`;

export default OrderPage;
