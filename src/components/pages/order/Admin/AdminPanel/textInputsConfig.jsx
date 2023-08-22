//icon

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getTextInputsConfig = (newProduct) => [
  {
    name: "title",
    label: "Nom du produit",
    placeholder: "Nom du produit (ex: Super Burger)",
    id: "title",
    Icon: <FaHamburger />,
    value: newProduct.title,
  },
  {
    name: "imageSource",
    label: "Lien de l'image",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    id: "imageSource",
    Icon: <BsFillCameraFill />,
    value: newProduct.imageSource,
  },
  {
    name: "price",
    label: "price",
    placeholder: "Prix",
    id: "price",
    Icon: <MdOutlineEuro />,
    value: newProduct.price ? newProduct.price : "",
  },
];
