import styled, { css } from "styled-components";
import { theme } from "../../theme";

const Button = ({
  label,
  Icon,
  className,
  version = "normal",
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyled
      className={className}
      version={version}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {Icon && <span> {Icon}</span>}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.weights.bold};
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

  &:active {
    border-color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  ${({ version }) => extraStyles[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding-block: 1rem;
  padding: 1.125rem 1.5rem;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P0};
  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const extraStyleSuccess = css`
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.primary};
  padding-block: 0.5rem;
  border-color: ${theme.colors.success};
  font-size: ${theme.fonts.XS};
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
  }
`;

const extraStyles = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
};
export default Button;
