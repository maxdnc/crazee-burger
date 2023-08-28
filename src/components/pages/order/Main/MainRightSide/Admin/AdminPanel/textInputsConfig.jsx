//icon

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getTextInputsConfig = (newProduct) => [
  {
    name: "title",
    label: "Product's name",
    placeholder: "Product's name (e.g. Super Burger)",
    id: "title",
    Icon: <FaHamburger />,
    value: newProduct.title,
  },
  {
    name: "imageSource",
    label: "Image URL link",
    placeholder: "Image URL (e.g. https://my-product-photo.png)",
    id: "imageSource",
    Icon: <BsFillCameraFill />,
    value: newProduct.imageSource,
  },
  {
    name: "price",
    label: "price",
    placeholder: "Price",
    id: "price",
    Icon: <MdOutlineEuro />,
    value: newProduct.price ? newProduct.price : "",
  },
];
