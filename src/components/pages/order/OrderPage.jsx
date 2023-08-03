import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>Bonjour {userId}</h1>
      <Link to="/">
        <button>log out</button>
      </Link>
    </>
  );
};
export default OrderPage;
