import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>ErrorPage</h1>
      <Link to="/">
        <button>return home</button>
      </Link>
    </>
  );
};
export default ErrorPage;
