import styled from "styled-components";
import { theme } from "../../../theme";

const Main = () => {
  return (
    <MainStyled>
      <div className="card">
        card
        <div className="image">image</div>
        <div className="title">title</div>
        <div className="container-price-add">
          <div className="price">price</div>
          <div className="add-button">Add</div>
        </div>
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  flex: 1;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .card {
    background: tomato;
    width: 100%;
    height: 100%;
    max-width: 240px;
    max-height: 330px;
    .image {
      background: green;
    }

    .title {
      background: blueviolet;
    }
    .container-price-add {
      background: yellowgreen;

      .price {
        background: orange;
      }
      .add-button {
        background: yellow;
      }
    }
  }
`;
export default Main;
