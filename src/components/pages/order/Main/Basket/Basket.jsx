import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import { isProductSelected } from "../../../../../utils/isProductSelected";
const Basket = () => {
  const { selectedProduct } = useContext(OrderContext);

  isProductSelected(selectedProduct);

  return (
    <BasketStyled>
      <div className="header">
        <p>total</p> <p>0.00€</p>
      </div>

      <p className="empty-basket">Votre commande est vide</p>

      <div className="footer">
        <p>Codé avec ♥️ et React.JS </p>
      </div>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  max-width: 350px;
  width: 100%;
  position: sticky;
  top: 0;
  height: calc(100vh - 108px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: ${theme.borderRadius.subtle};
  box-shadow: ${theme.shadows.subtle};
  overflow: hidden;

  .header {
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
  }

  .empty-basket {
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: ${theme.colors.background_dark};

    p {
      color: ${theme.colors.white};
      font-family: ${theme.fontsFamily.amatic};
      font-size: ${theme.fonts.P2};
      font-weight: ${theme.weights.bold};
    }
  }
`;
export default Basket;
