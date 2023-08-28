import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";

const BasketCard = () => {
  return (
    <BasketCardStyled>
      <div className="container-img">
        <img src="/images/burger1.png" alt="" />
      </div>
      <div className="container-info">
        <div className="container-title-price">
          <p className="title">new york friesssss</p>
          <p className="price">{formatPrice(2)}</p>
        </div>
        <p className="number-item">x 3</p>
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
