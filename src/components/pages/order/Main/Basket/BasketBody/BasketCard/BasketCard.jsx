import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";

//component
import CounterProduct from "./CounterProduct";
import DeleteButton from "./DeleteButton";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

const BasketCard = ({
  title,
  price,
  imageSource,
  quantity,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
}) => {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <BasketCardStyled>
      <div className="container-img">
        <img src={imageSource ? imageSource : IMAGE_BY_DEFAULT} alt={title} />
      </div>
      <div className="container-info">
        <div className="container-title-price">
          <p className="title">{title}</p>
          <p className="price">{price}</p>
        </div>
        <CounterProduct
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      {isModeAdmin && (
        <DeleteButton className={"delete-button"} onClick={deleteProduct} />
      )}
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
  position: relative;
  overflow: hidden;

  &:hover {
    .delete-button {
      transform: translateX(0);
    }
  }

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

    .container-title-price {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      width: 120px;

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
  }
`;
export default BasketCard;
