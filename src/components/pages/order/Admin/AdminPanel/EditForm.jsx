import { useContext, useState } from "react";
import { styled } from "styled-components";

//config
import { getTextInputsConfig } from "./textInputsConfig";
//component
import TextInput from "../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import EditInfoMessage from "./EditInfoMessage";

//context
import OrderContext from "../../../../../context/OrderContext";

const EditForm = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    handleEditToMenu,
    titleEditRef,
  } = useContext(OrderContext);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const textInputs = getTextInputsConfig(selectedProduct);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...selectedProduct, [name]: value };

    setSelectedProduct(productBeingUpdated); //update form
    handleEditToMenu(productBeingUpdated); // update menu
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={selectedProduct.imageSource}
        title={selectedProduct.title}
      />
      <div className="container-inputs">
        {textInputs.map((product) => (
          <TextInput
            {...product}
            key={product.name}
            onChange={handleChange}
            version="minimalist"
            ref={product.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <EditInfoMessage />
      </div>
    </EditFormStyled>
  );
};

const EditFormStyled = styled.form`
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
    display: flex;
    align-items: center;
  }
`;
export default EditForm;
