import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <section>
      <h1>Bienvenue chez nous !</h1>

      <h2>Connectez-vous</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          placeholder="Entre votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </section>
  );
};

export default LoginPage;
