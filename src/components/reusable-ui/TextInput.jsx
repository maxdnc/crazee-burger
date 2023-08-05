import styled from "styled-components";
import { theme } from "../../theme";

const TextInput = ({ onChange, value, Icon, label, id, ...extraProps }) => {
  return (
    <TextInputStyled>
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
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  padding: 1rem 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${theme.colors.greyDark};
  }

  input {
    width: 100%;
    border: none;

    &::placeholder {
      color: ${theme.colors.greyMedium};
      font-size: ${theme.fonts.P0};
    }
  }
`;

export default TextInput;
