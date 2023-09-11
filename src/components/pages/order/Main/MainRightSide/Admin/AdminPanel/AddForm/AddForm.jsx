import { useContext } from "react";
//enum
import { EMPTY_PRODUCT } from "../../../../../../../../enums/product";
//CustomHooks
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage";
//context
import OrderContext from "../../../../../../../../context/OrderContext";
//component
import Button from "../../../../../../../reusable-ui/Button.jsx";
import Form from "../Form/Form.jsx";
import SubmitMessage from "./SubmitMessage";
//style
import { styled } from "styled-components";
import { devices } from "../../../../../../../../enums/devices";

const AddForm = () => {
  const { handleAddToMenu, newProduct, setNewProduct, username } =
    useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage(2500);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAddToMenu(newProductToAdd, username);
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
        <Button label={"Add New Product"} version="success" />
        {isSubmitted && <SubmitMessage />}
      </FormFooterStyled>
    </Form>
  );
};

const FormFooterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${devices.md} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;

export default AddForm;
