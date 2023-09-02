import { styled } from "styled-components";
import { theme } from "../../../../../theme";

//context
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

//ultils
import { formatPrice, roundedNumber } from "../../../../../utils/maths";
import { findInArrayById } from "../../../../../utils/array";

const Total = () => {
  const { basketProducts, menuData } = useContext(OrderContext);

  const totalToPay = basketProducts.reduce((total, basketProduct) => {
    const productInfo = findInArrayById(menuData, basketProduct.id);
    total += roundedNumber(productInfo.price) * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <TotalStyled>
      <p>total</p>
      <p>{formatPrice(totalToPay)}</p>
    </TotalStyled>
  );
};

const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: ${theme.colors.background_dark};

  p {
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
  }
`;
export default Total;
