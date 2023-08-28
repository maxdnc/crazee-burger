import styled from "styled-components";
import BasketCard from "./BasketCard";

const ProductsSelection = () => {
  return (
    <ProductsSelectionStyled>
      <BasketCard />
      <BasketCard />
      <BasketCard />
    </ProductsSelectionStyled>
  );
};

const ProductsSelectionStyled = styled.div`
  display: grid;
  gap: 1.25rem;
  padding: 1.25rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(318px, 2fr));
`;
export default ProductsSelection;
