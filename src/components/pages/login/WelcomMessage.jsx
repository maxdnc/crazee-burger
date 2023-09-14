import styled from "styled-components";
import { theme } from "../../../theme";
import { devices } from "../../../enums/devices";

const WelcomMessage = () => {
  return (
    <WelcomMessageStyled>
      <h1>Explore Our Platform !</h1>
      <hr />
      <h2>Log In</h2>
    </WelcomMessageStyled>
  );
};

const WelcomMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;

  h1,
  h2 {
    color: ${theme.colors.white};
    font-family: ${theme.fontsFamily.amatic};
    font-weight: ${theme.weights.bold};
  }

  h1 {
    font-size: ${theme.fonts.P5};
    @media ${devices.xsm} {
      font-size: ${theme.fonts.P4};
    }
  }
  h2 {
    font-size: ${theme.fonts.P4};
  }

  hr {
    width: 100%;
    border: 1.5px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
  }
`;

export default WelcomMessage;
