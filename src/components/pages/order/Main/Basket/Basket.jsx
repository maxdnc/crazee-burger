import styled from "styled-components";
const Basket = () => {
  return (
    <BasketStyled>
      <p>Basket</p>
      <p>Basket</p>
    </BasketStyled>
  );
};

const BasketStyled = styled.div`
  background-color: red;
  min-width: 350px;
  position: sticky;
  top: 0;
  height: calc(100vh - 108px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
`;
export default Basket;
