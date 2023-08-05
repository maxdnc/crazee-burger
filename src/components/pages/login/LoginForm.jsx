import { useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

//style
import { theme } from "../../../theme";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${username}`);
    setUsername("");
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Explore Our Platform !</h1>
      <hr />
      <h2>Log In</h2>

      <TextInput
        label="Enter your first name"
        id="input-username"
        Icon={<BsPersonCircle />}
        onChange={handleChangeUsername}
        value={username}
        placeholder="First Name"
        required
      />

      <button>
        Access your dedicated area <FaChevronRight className="icon" />
      </button>
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

  h1,
  h2 {
    color: ${theme.colors.white};
    font-family: ${theme.fontsFamily.amatic};
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P5};
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }

  hr {
    width: 100%;
    border: 1.5px solid #f56a2c;
    border-radius: ${theme.borderRadius.round};
    margin-bottom: 1.5rem;
  }

  button {
    width: 100%;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    padding-block: 1rem;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.bold};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    line-height: small;

    cursor: pointer;
    transition: all 150ms ease-out;
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
    &:focus {
      border-color: ${theme.colors.white};
    }
    &:active {
      border-color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    .icon {
      margin-top: 3px;
      transform: scale(0.8);
    }
  }
`;

export default LoginForm;
