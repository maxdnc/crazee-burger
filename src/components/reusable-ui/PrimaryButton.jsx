import styled from "styled-components";
import { theme } from "../../theme";

const PrimaryButton = ({ label, Icon, className }) => {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      {Icon && <span> {Icon}</span>}
    </PrimaryButtonStyled>
  );
};

const PrimaryButtonStyled = styled.button`
  width: 100%;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  padding-block: 1rem;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.bold};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  line-height: small;

  cursor: pointer;
  transition: all 150ms ease-out;
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  &:focus {
    border-color: ${theme.colors.white};
  }
  &:active {
    border-color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export default PrimaryButton;
