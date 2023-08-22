import { useContext, useState } from "react";
//component
import TextInput from "../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx";
//icon

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";

//style
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

const AddForm = () => {
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleAddToMenu } = useContext(OrderContext);

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

  return (
    <AddFormStyled onSubmit={handleSubmit} method="POST">
      <div className="container-image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt="Prévisualisation de l'image" />
        ) : (
          <div className="empty-image">
            <p>Aucune Image</p>
          </div>
        )}
      </div>

      <div className="container-inputs">
        <TextInput
          name="title"
          label={"Nom du produit"}
          placeholder="Nom du produit (ex: Super Burger)"
          value={newProduct.title}
          onChange={handleChange}
          id={"name"}
          Icon={<FaHamburger />}
          version="minimalist"
        />
        <TextInput
          name="imageSource"
          label={"Lien de l'image"}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          id={"image-link"}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />
        <TextInput
          name="price"
          label={"prix"}
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          id={"price"}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </div>
      <div className="submit">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"add-form-button"}
          version="success"
        />
        {isSubmitted && (
          <div className="success">
            <span>
              <FiCheck />
            </span>
            <p>Ajouté avec succés</p>
          </div>
        )}
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

  .container-image-preview {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      object-position: center center;
    }
    .empty-image {
      border: 1px solid ${theme.colors.greyLight};
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }

  .container-inputs {
    display: grid;
    row-gap: 0.5rem;
    width: 100%;
    grid-area: 1 / 2 / 4 / 3;
  }

  .submit {
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .success {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      place-content: center;
      font-weight: bold;
      font-size: 0.75rem;
    }
  }
`;

export default AddForm;
