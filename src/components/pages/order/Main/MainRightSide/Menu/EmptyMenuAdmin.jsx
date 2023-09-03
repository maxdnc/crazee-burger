import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";

import Button from "../../../../../reusable-ui/Button.jsx";
import { devices } from "../../../../../../enums/devices";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

const EmptyMenuAdmin = ({ onClick }) => {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <EmptyMenuAdminStyled $isCollapsed={!isCollapsed}>
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
  min-height: calc(100dvh - 108px - 47px);
  ${({ $isCollapsed }) => $isCollapsed && isCollapsedStyle};

  @media ${devices.lg} {
    min-height: calc(100dvh - 92px - 47px);
  }
  @media ${devices.md} {
    min-height: calc(100dvh - 76px - 47px);
  }

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

const isCollapsedStyle = css`
  min-height: calc(100dvh - 92px - 47px - 250px - 1rem);
`;
export default EmptyMenuAdmin;
