import { styled } from "styled-components";
//component
import EmptyBasket from "./EmptyBasket";
import ProductsSelection from "./ProductsSelection";
//content
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import Loader from "../../../../../reusable-ui/Loader";

const BasketBody = () => {
  const { basketProducts, menuData } = useContext(OrderContext);

  const isBasketEmpty = basketProducts.length === 0;

  if (menuData === undefined) return <Loader />;

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
  scrollbar-gutter: stable;
  width: 100%;
`;
export default BasketBody;
