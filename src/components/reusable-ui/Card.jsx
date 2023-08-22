import styled from "styled-components";
import { theme } from "../../theme";

// component
import Button from "./Button";

//Icon

import { TiDelete } from "react-icons/ti";

const Card = ({
  image,
  alt,
  title,
  leftDescription,
  labelButton,
  hasDeleteButton,
  onDelete,
}) => {
  return (
    <CardStyled>
      {hasDeleteButton && (
        <button
          onClick={onDelete}
          className="delete-button"
          aria-label="delete item"
        >
          <TiDelete className="icon" />
        </button>
      )}
      <img src={image} alt={alt} />
      <div className="container-description">
        <h3>{title}</h3>
        <p>{leftDescription}</p>
        <Button label={labelButton} className={"card-button-add"} />
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.1);
  max-width: 240px;
  height: 330px;
  padding: 3.125rem 1.5rem 1.75rem 1.5rem;

  .delete-button {
    border: 1px solid red;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 4.5%;
    right: 6%;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    padding: 0;

    .icon {
      width: 100%;
      height: 100%;
    }

    :hover {
      color: ${theme.colors.red};
    }

    :active {
      color: ${theme.colors.primary};
    }
  }

  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
  }

  .container-description {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0.875rem;
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
      width: 100%;
      color: ${theme.colors.primary};
    }
    .card-button-add {
      grid-area: 2 / 3 / 3 / 5;
      font-size: ${theme.fonts.XS};
      padding: 0.75rem;
    }
  }
`;
export default Card;
