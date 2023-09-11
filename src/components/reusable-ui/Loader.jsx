import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

const Loader = ({ className }) => {
  return (
    <LoaderStyled className={className}>
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

  .loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 10px solid ${theme.colors.greyMedium};
    border-top: 10px solid ${theme.colors.primary};
    border-radius: 50%;
    animation: ${loaderAnimation} 0.8s infinite
      cubic-bezier(0.3, 0.65, 0.9, 0.64);
  }
`;

export default Loader;
