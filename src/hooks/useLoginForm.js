import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../api/user";

export const useLoginForm = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const validCharactersRegex = /^[a-zA-Z0-9À-ÖØ-öø-ÿ]+$/;

  const validateUsername = () => {
    if (username.trim() === "") {
      setError("Your username cannot be empty or just spaces.");
      return false;
    }
    if (username.includes(" ")) {
      setError("Please remove the spaces from your username.");
      return false;
    }
    if (!validCharactersRegex.test(username)) {
      setError("Your username can only contain letters and numbers.");
      return false;
    }

    if (username.length >= 15) {
      setError("Your username must be less than 15 characters long");
      return false;
    }
    if (username.length < 3) {
      setError("Your username must be at least 3 characters long.");
      return false;
    }
    return true;
  };

  const handleChangeUsername = (event) => {
    setError("");
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateUsername()) {
      return;
    }
    try {
      setIsLoading(true);
      const userReceived = await authenticateUser(username);
      navigate(`/order/${userReceived.username}`);
      setUsername("");
    } catch (errorMessage) {
      setIsLoading(false);
      console.log(errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    error,
    setUsername,
    setError,
    handleChangeUsername,
    isLoading,
    handleSubmit,
  };
};
