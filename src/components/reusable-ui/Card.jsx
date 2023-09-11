import styled, { css } from "styled-components";
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
  onClick,
  isHoverable,
  isSelected,
  onAdd,
  className,
  isAvailable,
  imageSoldOut,
  imageSoldOutAlt,
}) => {
  return (
    <CardStyled
      onClick={onClick}
      $isHoverable={isHoverable}
      $isSelected={isSelected}
      className={className}
    >
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
        <Button
          onClick={onAdd}
          label={labelButton}
          className={"card-button-add"}
        />
      </div>
      {isAvailable ? null : (
        <div className="sold-out">
          <img src={imageSoldOut} alt={imageSoldOutAlt} />
        </div>
      )}
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
  position: relative;
  overflow: hidden;
  transition: ease-out 0.15s;

  .sold-out {
    background-color: ${theme.colors.white};
    opacity: 0.9;
    position: absolute;
    inset: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
    z-index: 2;

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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
  ${({ $isHoverable }) => $isHoverable && hoverableStyle};
  ${({ $isHoverable, $isSelected }) =>
    $isHoverable & $isSelected && selectedStyle}
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;
const selectedStyle = css`
  background-color: ${theme.colors.primary};

  .card-button-add {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    &:active {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }
  }

  .delete-button {
    color: ${theme.colors.white};
    :active {
      color: ${theme.colors.white};
    }
  }

  .container-description {
    p {
      color: ${theme.colors.white};
    }
  }
`;

export default Card;
