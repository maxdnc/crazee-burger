import { useContext, useState } from "react";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";

//context
import OrderContext from "../../../../../../../context/OrderContext";
//component
import Button from "../../../../../../reusable-ui/Button.jsx";
import Form from "./Form.jsx";
import SubmitMessage from "./SubmitMessage";
//style
import { styled } from "styled-components";

const AddForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleAddToMenu, newProduct, setNewProduct } =
    useContext(OrderContext);

  const handleSubmit = (event) => {
    const displaySuccessMessage = () => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    };
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAddToMenu(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <Form
      productData={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <FormFooterStyled>
        <Button label={"Add new product to the menu"} version="success" />
        {isSubmitted && <SubmitMessage />}
      </FormFooterStyled>
    </Form>
  );
};

const FormFooterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default AddForm;
