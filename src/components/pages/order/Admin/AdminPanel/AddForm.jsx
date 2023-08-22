import { useContext, useState } from "react";
import { getTextInputsConfig } from "./textInputsConfig.jsx";

//component
import TextInput from "../../../../reusable-ui/TextInput";
import Button from "../../../../reusable-ui/Button.jsx";

//style
import { styled } from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

const AddForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleAddToMenu, newProduct, setNewProduct } =
    useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAddToMenu(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const textInputs = getTextInputsConfig(newProduct);

  return (
    <AddFormStyled onSubmit={handleSubmit} method="POST">
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="container-inputs">
        {textInputs.map((textInput) => (
          <TextInput
            {...textInput}
            key={textInput.name}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          label={"Add new product to the menu"}
          className={"add-form-button"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
};

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  gap: 8px 20px;

  .container-inputs {
    display: grid;
    row-gap: 0.5rem;
    width: 100%;
    grid-area: 1 / 2 / 4 / 3;
  }

  .submit {
    grid-area: 4 / 2 / 5 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default AddForm;
