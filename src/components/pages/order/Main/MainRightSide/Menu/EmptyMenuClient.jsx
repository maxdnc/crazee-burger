import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { devices } from "../../../../../../enums/devices";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

const EmptyMenuClient = () => {
  return (
    <EmptyMenuClientStyled>
      <p className="title">Victim of our success! :D</p>
      <p className="description">We are working on new recipes.</p>
      <p className="description">See you soon!</p>
    </EmptyMenuClientStyled>
  );
};

const EmptyMenuClientStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  height: 100%;
  padding-bottom: 5%;
  min-height: calc(100dvh - 108px - 47px);

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
`;

export default EmptyMenuClient;
