import React from "react";
//style
import { styled } from "styled-components";
//config
import { getTextInputsConfig } from "./textInputsConfig";
//component
import TextInput from "../../../../../../reusable-ui/TextInput.jsx";
import ImagePreview from "./ImagePreview";
import { devices } from "../../../../../../../enums/devices";

const Form = React.forwardRef(
  ({ productData, onChange, onSubmit, children }, ref) => {
    const textInputs = getTextInputsConfig(productData);

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
              key={product.name}
              onChange={onChange}
              version="minimalist"
              ref={ref && product.name === "title" ? ref : null}
            />
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
    row-gap: 0.5rem;
    width: 100%;
    grid-area: 1 / 2 / 4 / 3;
    @media ${devices.md} {
      grid-area: unset;
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
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
  }
`;
export default Form;
