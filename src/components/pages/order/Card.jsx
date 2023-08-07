import styled from "styled-components";
import { theme } from "../../../theme";

const Card = ({ image, title, price }) => {
  return (
    <CardStyled>
      <img src={image} />

      <div className="container-price-add">
        <h3>{title}</h3>
        <p>{price}</p>
        <div className="add-button">Add</div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  background: tomato;
  max-width: 240px;
  height: 330px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 3.125rem;
  padding-bottom: 1.75rem;

  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
  }

  .container-price-add {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0.75rem;
    align-items: center;

    h3 {
      grid-area: 1 / 1 / 2 / 5;
      line-height: normal;
      font-size: ${theme.fonts.P4};
      font-family: ${theme.fontsFamily.amatic};
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.dark};
    }
    p {
      grid-area: 2 / 1 / 3 / 3;
      background: orange;
      width: 100%;
    }
    .add-button {
      grid-area: 2 / 3 / 3 / 5;
      background: yellow;
      width: 100%;
    }
  }
`;
export default Card;
