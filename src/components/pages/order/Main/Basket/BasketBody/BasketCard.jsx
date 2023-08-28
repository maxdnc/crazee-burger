import styled from "styled-components";
import { theme } from "../../../../../../theme";

const BasketCard = ({ title, price, imageSource, quantity }) => {
  return (
    <BasketCardStyled>
      <div className="container-img">
        <img src={imageSource} alt={title} />
      </div>
      <div className="container-info">
        <div className="container-title-price">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
        <p className="number-item">x {quantity}</p>
      </div>
    </BasketCardStyled>
  );
};

const BasketCardStyled = styled.div`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.round};

  height: 86px;
  padding: 0.5rem 1rem;

  .container-img {
    justify-self: center;
    img {
      width: 85px;
      height: 70px;
      object-fit: contain;
    }
  }
  .container-info {
    display: flex;
    padding-left: 1rem;
    align-items: center;

    .container-title-price {
      justify-self: center;
      display: flex;
      flex-direction: column;
      width: 120px;

      padding-bottom: 0.5rem;

      .title {
        font-family: ${theme.fontsFamily.amatic};
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.P3};
        font-weight: ${theme.weights.bold};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        color: ${theme.colors.primary};
        font-size: 0.9375rem;
      }
    }

    .number-item {
      margin: 0 auto;
      color: ${theme.colors.primary};
      font-size: 0.9375rem;
    }
  }
`;
export default BasketCard;
