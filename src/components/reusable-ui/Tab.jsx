import { useState } from "react";
import styled from "styled-components";

const Tab = ({ Icon, label, onClick, className }) => {
  return (
    <TabStyled onClick={onClick} className={className}>
      {Icon && <span>{Icon}</span>}
      {label && <span>{label}</span>}
    </TabStyled>
  );
};

const TabStyled = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.375rem;
  background-color: white;

  &.active {
    background-color: black;
    color: white;
  }
`;

export default Tab;
