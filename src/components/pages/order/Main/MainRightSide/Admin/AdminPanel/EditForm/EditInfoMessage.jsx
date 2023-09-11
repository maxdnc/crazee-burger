import styled from "styled-components";
import { theme } from "../../../../../../../../theme";
import { devices } from "../../../../../../../../enums/devices";
const EditInfoMessage = () => {
  return (
    <EditInfoMessageStyled>
      Click on a menu item to edit it{" "}
      <span className="live-update">in real time</span>
    </EditInfoMessageStyled>
  );
};

const EditInfoMessageStyled = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.P0};
  @media ${devices.md} {
    text-align: center;
  }
  .live-update {
    text-decoration: underline;
  }
`;

export default EditInfoMessage;
