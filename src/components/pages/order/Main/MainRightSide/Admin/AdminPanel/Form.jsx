import React from "react";
//style
import { styled } from "styled-components";
import { devices } from "../../../../../../../enums/devices";

//component
import ImagePreview from "./ImagePreview";
import FormField from "./FormField";

const Form = React.forwardRef(
  ({ productData, onChange, onSubmit, onFocus, onBlur, children }, ref) => {
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview
          imageSource={productData.imageSource}
          title={productData.title}
        />
        <FormField
          productData={productData}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
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
