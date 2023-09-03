import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import { IoMdExit } from "react-icons/io";
import { devices } from "../../../../../enums/devices";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

const Footer = () => {
  const { isBasketSmallDevicesActive, setIsBasketSmallDevicesActive } =
    useContext(OrderContext);

  const handleClick = () => {
    console.log("first");
    setIsBasketSmallDevicesActive(!isBasketSmallDevicesActive);
  };

  return (
    <FooterStyled>
      <button
        onClick={() => {
          handleClick();
        }}
        aria-label="close-basket"
      >
        <IoMdExit />
      </button>
      <p>Coded with ❤️ and React.JS</p>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: ${theme.colors.background_dark};
  @media ${devices.lg} {
    justify-content: space-between;
  }

  p {
    color: ${theme.colors.white};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P2};
    font-weight: ${theme.weights.bold};
  }

  button {
    transform: rotate(180deg);
    background: none;
    border: none;
    color: ${theme.colors.primary};
    font-size: 2rem;
    display: none;
    cursor: pointer;

    @media ${devices.lg} {
      display: inline-flex;
    }
  }
`;
export default Footer;
