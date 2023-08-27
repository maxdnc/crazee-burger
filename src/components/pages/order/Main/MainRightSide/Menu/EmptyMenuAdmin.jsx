import styled from "styled-components";
import { theme } from "../../../../../../theme";

import Button from "../../../../../reusable-ui/Button.jsx";

const EmptyMenuAdmin = ({ onClick }) => {
  return (
    <EmptyMenuAdminStyled>
      <p className="title">Is the menu empty ?</p>
      <p className="description">Click below to reset it</p>
      <Button label={"Generate new products"} onClick={onClick} />
    </EmptyMenuAdminStyled>
  );
};

const EmptyMenuAdminStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  min-height: calc(100vh - 108px - 47px);

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

  button {
    margin-top: 0.625rem;
    font-size: ${theme.fonts.XS};
    width: auto;
  }
`;
export default EmptyMenuAdmin;
