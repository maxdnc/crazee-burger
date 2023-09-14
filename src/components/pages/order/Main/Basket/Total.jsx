import { styled } from "styled-components";
import { theme } from "../../../../../theme";

//context
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

//ultils
import { formatPrice, roundedNumber } from "../../../../../utils/maths";
import { findInArrayById } from "../../../../../utils/array";
import { convertStringToBoolean } from "../../../../../utils/string";
//component
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

const Total = () => {
  const { basketProducts, menuData } = useContext(OrderContext);

  const totalToPay = menuData
    ? basketProducts.reduce((total, basketProduct) => {
        const productInfo = findInArrayById(menuData, basketProduct.id);
        if (convertStringToBoolean(productInfo.isAvailable) === false)
          return total;
        total += roundedNumber(productInfo.price) * basketProduct.quantity;
        return total;
      }, 0)
    : 0;

  return (
    <TotalStyled>
      <p>total</p>
      <CasinoEffect count={formatPrice(totalToPay)} className={"count"} />
    </TotalStyled>
  );
};

const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1.5rem;
  overflow: hidden;
  background-color: ${theme.colors.background_dark};
  .container-price {
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .count,
  p {
    color: ${theme.colors.secondary};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
  }
`;
export default Total;
