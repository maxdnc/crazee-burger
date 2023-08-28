import styled from "styled-components";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { formatPrice } from "../../../../../../utils/maths";

const ProductsSelection = () => {
  const { basketProducts } = useContext(OrderContext);

  return (
    <ProductsSelectionStyled>
      {basketProducts.map((product) => {
        return (
          <li key={product.id}>
            <BasketCard
              title={product.title}
              price={formatPrice(product.price)}
              imageSource={product.imageSource}
              quantity={product.quantity}
            />
          </li>
        );
      })}
    </ProductsSelectionStyled>
  );
};

const ProductsSelectionStyled = styled.ul`
  display: grid;
  gap: 1.25rem;
  padding: 1.25rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(318px, 1fr));
  list-style: none;
  margin-left: 0;
`;
export default ProductsSelection;
