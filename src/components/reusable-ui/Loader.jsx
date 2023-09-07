import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";
import { devices } from "../../enums/devices";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";

const Loader = () => {
  const { isCollapsed } = useContext(OrderContext);
  return (
    <LoaderStyled $isCollapsed={!isCollapsed}>
      <div className="loader"></div>
    </LoaderStyled>
  );
};

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: calc(100dvh - 108px - 47px);

  @media ${devices.lg} {
    min-height: calc(100dvh - 92px - 47px);
  }
  @media ${devices.md} {
    min-height: calc(100dvh - 76px - 47px);
  }

  span {
    text-align: center;
    font-family: ${theme.fontsFamily.amatic};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.semiBold};
  }
  .loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 10px solid ${theme.colors.greyMedium};
    border-top: 10px solid ${theme.colors.primary};
    border-radius: 50%;
    animation: ${loaderAnimation} 1s infinite linear;
  }
`;

export default Loader;
