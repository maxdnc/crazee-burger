import { useState } from "react";
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

const AddForm = () => {
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (event) => {
    const imageUrl = event.target.value;
    setImage(imageUrl);
    setImagePreview(imageUrl);
  };

  return (
    <AddFormStyled method="POST">
      <div className="container-image-preview">
        {imagePreview ? (
          <img src={imagePreview} alt="Prévisualisation de l'image" />
        ) : (
          <div className="empty-image">
            <p>Aucune Image</p>
          </div>
        )}
      </div>

      <div className="container-inputs">
        <TextInput
          label={"Nom du produit"}
          placeholder="Nom du produit (ex: Super Burger)"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          id={"name"}
          className="input-add-form"
          Icon={<FaHamburger />}
        />
        <TextInput
          label={"Lien de l'image"}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          value={image}
          onChange={handleImageChange}
          id={"image-link"}
          className="input-add-form"
          Icon={<BsFillCameraFill />}
        />
        <TextInput
          label={"prix"}
          placeholder="Prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
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

const AddFormStyled = styled.form``;

export default AddForm;
