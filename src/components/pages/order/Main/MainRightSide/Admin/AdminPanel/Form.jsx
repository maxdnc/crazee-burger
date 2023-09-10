import React from "react";
//style
import { styled } from "styled-components";
import { devices } from "../../../../../../../enums/devices";
//config
import { getTextInputsConfig } from "./textInputsConfig";
import { getSelectOptionConfig } from "./selectOptionConfig";
//component
import TextInput from "../../../../../../reusable-ui/TextInput.jsx";
import ImagePreview from "./ImagePreview";
import SelectOption from "../../../../../../reusable-ui/SelectOption";

const Form = React.forwardRef(
  ({ productData, onChange, onSubmit, onFocus, onBlur, children }, ref) => {
    const textInputs = getTextInputsConfig(productData);
    const selectsOptions = getSelectOptionConfig(productData);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview
          imageSource={productData.imageSource}
          title={productData.title}
        />
        <div className="container-inputs">
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
            <SelectOption {...select} key={select.id} />
          ))}
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 100%;
  gap: 8px 20px;

  .container-inputs {
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
  }

  .form-footer {
    grid-area: 4 / 2 / 5 / 3;
    margin-top: 0.5rem;
    @media ${devices.md} {
      grid-area: unset;
    }
  }

  @media ${devices.md} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 3fr 1fr;
    gap: 2rem;
  }
`;
export default Form;
