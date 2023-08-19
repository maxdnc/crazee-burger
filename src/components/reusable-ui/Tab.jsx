import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const Tab = ({ Icon, label, onClick, className }) => {
  return (
    <TabStyled onClick={onClick} className={className}>
      {Icon && <span className="icon">{Icon}</span>}
      {label && <span>{label}</span>}
    </TabStyled>
  );
};

const TabStyled = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 1.375rem;
  background-color: ${theme.colors.white};

  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  box-shadow: ${theme.shadows.subtle};
  color: ${theme.colors.greySemiDark};

  .icon {
    color: ${theme.colors.greySemiDark};
  }

  &.active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    &:hover {
      text-decoration: underline;
      border-color: ${theme.colors.background_dark};
    }

    .icon {
      color: ${theme.colors.white};
    }
  }

  &:hover {
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};
  }
`;

export default Tab;
