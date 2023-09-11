import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span className="hint">Edit a product by clicking on it</span>
      <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.P3};
  color: ${theme.colors.greyBlue};

  span {
    margin-right: 1rem;
  }
`;
