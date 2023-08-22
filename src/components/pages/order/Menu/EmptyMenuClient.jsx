import styled from "styled-components";
import { theme } from "../../../../theme";

const EmptyMenuClient = () => {
  return (
    <EmptyMenuClientStyled>
      <p className="title">Victime de notre succès ! :D</p>
      <p className="description">
        De nouvelles recettes sont en cours de préparation.
      </p>
      <p className="description">À très vite !</p>
    </EmptyMenuClientStyled>
  );
};

const EmptyMenuClientStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  height: 100%;
  padding-bottom: 5%;

  .title,
  .description {
    text-align: center;
    font-family: ${theme.fontsFamily.amatic};
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.P4};
  }
`;
export default EmptyMenuClient;
