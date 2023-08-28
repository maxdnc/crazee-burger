import { useContext } from "react";
//component
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
//context
import OrderContext from "../../../../../../../context/OrderContext";

const EditForm = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    handleEditToMenu,
    titleEditRef,
  } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...selectedProduct, [name]: value };

    setSelectedProduct(productBeingUpdated); //update form
    handleEditToMenu(productBeingUpdated); // update menu
  };

  return (
    <Form
      productData={selectedProduct}
      onChange={handleChange}
      ref={titleEditRef}
    >
      <>
        <EditInfoMessage />
      </>
    </Form>
  );
};

export default EditForm;
