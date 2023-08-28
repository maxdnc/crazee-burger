import { styled } from "styled-components";

import EmptyBasket from "./EmptyBasket";
import ProductsSelection from "./ProductsSelection";

const BasketBody = () => {
  return (
    <BasketBodyStyled>
      <ProductsSelection />
      {/* <EmptyBasket /> */}
    </BasketBodyStyled>
  );
};

const BasketBodyStyled = styled.div`
  height: 100%;
`;
export default BasketBody;
