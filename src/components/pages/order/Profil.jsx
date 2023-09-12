import { Link } from "react-router-dom";

//Icon
import { BsPersonCircle } from "react-icons/bs";

//style
import styled from "styled-components";
import { theme } from "../../../theme";
import { devices } from "../../../enums/devices";

const Profil = ({ username, onClick }) => {
  return (
    <ProfilStyled>
      <div className="container-user">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link onClick={onClick} to="/">
          Log out
        </Link>
      </div>
      <div className="picture-user">
        <BsPersonCircle />
      </div>
    </ProfilStyled>
  );
};

const ProfilStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .container-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${theme.colors.greyBlue};
  }
  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
    text-transform: capitalize;
  }

  .picture-user {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    @media ${devices.sm} {
      display: none;
    }
  }
  a {
    text-decoration: none;
    background: none;
    border: none;
    padding: unset;
    font-size: 0.9rem;
    color: ${theme.colors.greyBlue};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Profil;
