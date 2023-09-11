import styled from "styled-components";
// icon
import { BsCloudCheck } from "react-icons/bs";
import { theme } from "../../../../../../../../theme";

const SavingMessage = () => {
  return (
    <SavingMessageStyled>
      <span className="icon">
        <BsCloudCheck />
      </span>
      <p>Changes Saved !</p>
    </SavingMessageStyled>
  );
};

const SavingMessageStyled = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;
  .icon {
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.blue};
  }

  p {
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.blue};
  }
`;
export default SavingMessage;
