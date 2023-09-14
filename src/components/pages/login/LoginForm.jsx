// icons
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

//style
import styled from "styled-components";

//components
import TextInput from "../../reusable-ui/TextInput";
import WelcomMessage from "./WelcomMessage";
import Button from "../../reusable-ui/Button";
import Loader from "../../reusable-ui/Loader";

//hook
import { useLoginForm } from "../../../hooks/useLoginForm";
import { theme } from "../../../theme";

const LoginForm = () => {
  const { username, error, handleChangeUsername, isLoading, handleSubmit } =
    useLoginForm();

  if (isLoading) return <Loader />;

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <WelcomMessage />
      {error && <p>{error}</p>}
      <TextInput
        label="Enter your first name"
        id="input-username"
        Icon={<BsPersonCircle />}
        onChange={handleChangeUsername}
        value={username}
        placeholder="First Name"
        required
        version={error ? "normalError" : "normal"}
      />

      <Button
        label={"Access your dedicated area"}
        Icon={<FaChevronRight className="icon-access-button" />}
      />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 1rem;

  p {
    color: ${theme.colors.red};
    font-weight: ${theme.weights.bold};
    text-align: left;
  }

  .icon-access-button {
    margin-top: 3px;
    transform: scale(0.8);
  }
`;

export default LoginForm;
