import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: url("./images/burger-background.jpg") rgba(0, 0, 0, 0.5)
      center/cover;
    background-blend-mode: darken;
  }
`;

export default LoginPage;
