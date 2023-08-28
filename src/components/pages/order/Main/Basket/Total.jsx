import { styled } from "styled-components";
import { theme } from "../../../../../theme";

const Total = ({ totalAmount }) => {
  return (
    <TotalStyled>
      <p>total</p>
      <p>{totalAmount}</p>
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
