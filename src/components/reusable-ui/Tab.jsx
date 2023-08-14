import styled from "styled-components";

const Tab = ({ Icon, label }) => {
  return (
    <TabStyled>
      {Icon && <span>{Icon}</span>}
      {label && <span>{label}</span>}
    </TabStyled>
  );
};

const TabStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.375rem;
`;

export default Tab;
