import TextInput from "../../../../../../reusable-ui/TextInput.jsx";
import SelectOption from "../../../../../../reusable-ui/SelectOption";
import React from "react";
import styled from "styled-components";
import { devices } from "../../../../../../../enums/devices.js";
import { getTextInputsConfig } from "./textInputsConfig.jsx";
import { getSelectOptionConfig } from "./selectOptionConfig.jsx";

const FormField = React.forwardRef(
  ({ productData, onChange, onFocus, onBlur }, ref) => {
    const textInputs = getTextInputsConfig(productData);
    const selectsOptions = getSelectOptionConfig(productData);

    return (
      <FormFieldStyled>
        {textInputs.map((product) => (
          <TextInput
            {...product}
            className={product.className}
            onFocus={onFocus}
            onBlur={onBlur}
            key={product.name}
            onChange={onChange}
            version="minimalist"
            ref={ref && product.name === "title" ? ref : null}
          />
        ))}
        {selectsOptions.map((select) => (
          <SelectOption
            {...select}
            key={select.id}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </FormFieldStyled>
    );
  }
);

const FormFieldStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 0.5rem;
  column-gap: 1rem;
  width: 100%;
  grid-area: 1 / 2 / 4 / 3;

  .title {
    grid-area: 1 / 1 / 2 / 4;
    @media ${devices.md} {
      grid-area: 1 / 1 / 2 / 3;
    }
  }
  .image-source {
    grid-area: 2 / 1 / 3 / 4;
    @media ${devices.md} {
      grid-area: 2 / 1 / 3 / 3;
    }
  }
  .price {
    grid-area: 3/1/4/2;
    @media ${devices.md} {
      grid-area: 3/1/4/3;
    }
  }
  .container-availability {
    grid-area: 3/2/4/3;
    @media ${devices.md} {
      grid-area: 4/1/5/2;
    }
  }
  .container-add-option {
    grid-area: 3/3/4/4;
    @media ${devices.md} {
      grid-area: 4/2/5/3;
    }
  }

  @media ${devices.md} {
    grid-area: unset;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.xsm} {
    grid-template-areas: unset;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export default FormField;
