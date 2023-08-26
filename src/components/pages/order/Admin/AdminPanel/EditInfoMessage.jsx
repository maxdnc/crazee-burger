import styled from "styled-components";
import { theme } from "../../../../../theme";
const EditInfoMessage = () => {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  );
};

const EditInfoMessageStyled = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P0};
  .live-update {
    text-decoration: underline;
  }
`;

export default EditInfoMessage;
