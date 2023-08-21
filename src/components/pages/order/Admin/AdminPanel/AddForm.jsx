import { useContext, useState } from "react";
//component
import TextInput from "../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton.jsx";
//icon

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

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
  const { handleAddToMenu } = useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAddToMenu(newProductToAdd);
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
          className="input-add-form"
          Icon={<FaHamburger />}
        />
        <TextInput
          name="imageSource"
          label={"Lien de l'image"}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={newProduct.imageSource}
          onChange={handleChange}
          id={"image-link"}
          className="input-add-form"
          Icon={<BsFillCameraFill />}
        />
        <TextInput
          name="price"
          label={"prix"}
          placeholder="Prix"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          id={"price"}
          className="input-add-form"
          Icon={<MdOutlineEuro />}
        />
      </div>
      <div className="submit">
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"add-form-button"}
        />
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

  .input-add-form {
    background-color: #f5f5f7;
    border-radius: 5px;
    padding-block: 0;
  }

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
    .add-form-button {
      background-color: #60bd4f;
      padding-block: 0.5rem;
      border-color: #60bd4f;
      width: 50%;
      font-size: 0.875rem;

      &:hover {
        background-color: white;
        color: #60bd4f;
      }
    }
  }
`;

export default AddForm;
