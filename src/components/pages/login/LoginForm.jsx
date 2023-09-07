import { useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

//style
import { theme } from "../../../theme";
import styled from "styled-components";
import { devices } from "../../../enums/devices";

//components
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
//api
import { authenticateUser } from "../../../api/user";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    authenticateUser(username);
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
  @media ${devices.md} {
    padding: 1rem;
  }
  @media ${devices.sm} {
  }

  h1,
  h2 {
    color: ${theme.colors.white};
    font-family: ${theme.fontsFamily.amatic};
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P5};

    @media ${devices.sm} {
      font-size: ${theme.fonts.P4};
    }
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

  .icon-access-button {
    margin-top: 3px;
    transform: scale(0.8);
  }
`;

export default LoginForm;
