import styled from "styled-components";
import { theme } from "../../../../../theme";

//icon
import { FiCheck } from "react-icons/fi";

const SubmitMessage = () => {
  return (
    <SubmitMessageStyled>
      <span>
        <FiCheck className="icon" />
      </span>
      <p>Successfully added !</p>
    </SubmitMessageStyled>
  );
};

const SubmitMessageStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  place-content: center;
  font-weight: bold;
  font-size: 1rem;
  color: ${theme.colors.success};

  .icon {
    font-size: 1.3rem;
    padding: 1.5px;
    border: 2px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.circle};
  }
`;
export default SubmitMessage;
