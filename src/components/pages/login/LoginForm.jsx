import { useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

//style
import styled from "styled-components";

//components
import TextInput from "../../reusable-ui/TextInput";
import WelcomMessage from "./WelcomMessage";
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
      <WelcomMessage />
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
  padding: 1rem;

  .icon-access-button {
    margin-top: 3px;
    transform: scale(0.8);
  }
`;

export default LoginForm;
