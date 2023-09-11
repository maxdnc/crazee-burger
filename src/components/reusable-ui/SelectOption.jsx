import styled from "styled-components";
import { theme } from "../../theme";

const SelectOption = ({
  name,
  label,
  id,
  Icon,
  value,
  className,
  options,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <SelectOptionStyled className={className}>
      <span>{Icon && Icon}</span>
      {label && (
        <label hidden htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectOptionStyled>
  );
};

const SelectOptionStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  width: 100%;
  padding: 0 1.5rem;
  flex: 1;
  min-height: min-content;

  span {
    color: ${theme.colors.greyDark};
    font-size: 1rem;
    min-width: max-content;
  }
  select {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    color: ${theme.colors.greyMedium};
    appearance: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export default SelectOption;
