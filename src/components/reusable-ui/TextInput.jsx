import styled, { css } from "styled-components";
import { theme } from "../../theme";

const TextInput = ({
  onChange,
  value,
  Icon,
  label,
  id,
  className,
  version = "normal",
  ...extraProps
}) => {
  return (
    <TextInputStyled className={className} version={version}>
      <span>{Icon && Icon}</span>
      {label && (
        <label hidden htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        onChange={onChange}
        value={value}
        type="text"
        {...extraProps}
      />
    </TextInputStyled>
  );
};

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    border: none;
    background: none;
    text-overflow: ellipsis;
  }
  ${({ version }) => extraStyles[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  color: ${theme.colors.greySemiDark};
  padding: 1rem 1.5rem;
  input {
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.greySemiMedium};
      font-size: ${theme.fonts.P0};
    }
  }
  span {
    color: ${theme.colors.greyDark};
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 0 1.5rem;
  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-size: ${theme.fonts.P0};
    }
  }
  span {
    color: ${theme.colors.greyBlue};
  }
`;

const extraStyles = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};

export default TextInput;
