import styled from "styled-components";
import { theme } from "../../../../../../../theme";
//icon
import { TbTrashXFilled } from "react-icons/tb";

const DeleteButton = ({ onClick, className }) => {
  return (
    <DeleteButtonStyled className={className} onClick={onClick}>
      <span>
        <TbTrashXFilled />
      </span>
    </DeleteButtonStyled>
  );
};
const DeleteButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: calc(33% + 1rem);
  cursor: pointer;
  border: none;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  cursor: pointer;
  transform-origin: left;
  transform: translateX(-105%);
  transition: transform 0.2s ease-out, color ease-out 0.2s;
  font-size: 1.5rem;

  &:hover {
    color: ${theme.colors.dark};
  }
  &:active {
    color: ${theme.colors.white};
  }
  &:focus {
    transform: translateX(0%);
  }
`;
export default DeleteButton;
