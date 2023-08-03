import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${name}`);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        placeholder="Entre votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
};
export default LoginForm;
