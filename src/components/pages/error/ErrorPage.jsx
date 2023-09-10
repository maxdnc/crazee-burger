import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoMdExit } from "react-icons/io";

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <h1>Error Page</h1>
      <Link to="/">
        {" "}
        <IoMdExit /> Return to login page
      </Link>
    </ErrorPageStyled>
  );
};

const ErrorPageStyled = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${theme.colors.background_dark};

  h1 {
    font-size: ${theme.fonts.P6};
    font-family: ${theme.fontsFamily.amatic};
    color: ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    font-size: ${theme.fonts.P2};
    transition: color 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.white};
      text-decoration: underline;
    }
  }
`;
export default ErrorPage;
