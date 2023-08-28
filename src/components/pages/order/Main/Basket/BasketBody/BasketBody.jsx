import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import BasketCard from "./BasketCard";

const BasketBody = () => {
  return (
    <BasketBodyStyled>
      <div className="selection-client">
        <BasketCard />
      </div>

      {/* <p className="empty-basket">Votre commande est vide</p> */}
    </BasketBodyStyled>
  );
};

const BasketBodyStyled = styled.div`
  height: 100%;

  .selection-client {
    display: grid;
    gap: 1.25rem;
    padding: 1.25rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(318px, 2fr));
  }

  .empty-basket {
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
  }

  .card-basket {
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
  }
`;
export default BasketBody;
