import { styled } from "styled-components";
//component
import EmptyBasket from "./EmptyBasket";
import ProductsSelection from "./ProductsSelection";
//content
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

const BasketBody = () => {
  const { basketProducts } = useContext(OrderContext);
  const isBasketEmpty = basketProducts.length === 0;
  return (
    <BasketBodyStyled>
      {isBasketEmpty ? <EmptyBasket /> : <ProductsSelection />}
    </BasketBodyStyled>
  );
};

const BasketBodyStyled = styled.div`
  height: 100%;
  max-height: min-content;
  overflow-y: auto;
  width: 100%;
`;
export default BasketBody;
