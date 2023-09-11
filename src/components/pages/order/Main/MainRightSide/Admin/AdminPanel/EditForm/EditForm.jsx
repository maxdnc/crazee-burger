import { useContext, useState } from "react";
//component
import EditInfoMessage from "./EditInfoMessage";
import Form from "../Form/Form.jsx";
import SavingMessage from "./SavingMessage";
//context
import OrderContext from "../../../../../../../../context/OrderContext";
//hook
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage";

const EditForm = () => {
  const [valueOnFocus, setValueOnFocus] = useState();
  const {
    username,
    selectedProduct,
    setSelectedProduct,
    handleEditToMenu,
    titleEditRef,
  } = useContext(OrderContext);

  const { isSubmitted: isSaved, displaySuccessMessage } =
    useSuccessMessage(2000);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...selectedProduct, [name]: value };

    setSelectedProduct(productBeingUpdated); //update form
    handleEditToMenu(productBeingUpdated, username); // update menu
  };

  const handleFocus = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleBlur = (event) => {
    const inputValueOnBlur = event.target.value;
    if (valueOnFocus !== inputValueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <Form
      productData={selectedProduct}
      onChange={handleChange}
      ref={titleEditRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <>{isSaved ? <SavingMessage /> : <EditInfoMessage />}</>
    </Form>
  );
};

export default EditForm;
