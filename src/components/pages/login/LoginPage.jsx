import { devices } from "../../../enums/devices";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"} />
      <LoginForm />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: url("/images/burger-background.webp") rgba(0, 0, 0, 0.5)
      center/cover;
    background-blend-mode: darken;
  }
  .logo-login-page {
    transform: scale(2.5);

    @media ${devices.md} {
      transform: scale(2);
    }

    @media ${devices.sm} {
      transform: scale(1.75);
    }

    @media ${devices.xsm} {
      transform: scale(1.25);
    }
  }
`;

export default LoginPage;
