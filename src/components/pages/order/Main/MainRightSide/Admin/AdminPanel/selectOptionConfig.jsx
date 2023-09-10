import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getSelectOptionConfig = (newProduct) => [
  {
    name: "availability",
    label: "Product Availability:",
    id: "availability",
    Icon: <FiPackage />,
    value: newProduct.isAvailable,
    className: "availability",
    options: [
      { id: 1, label: "Available", value: true },
      { id: 2, label: "Not Available", value: false },
    ],
  },
  {
    name: "add-option",
    label: "Add Option:",
    id: "add-option",
    Icon: <GoMegaphone />,
    value: newProduct.isAdvertised,
    className: "add-option",
    options: [
      { id: 1, label: "With Add", value: true },
      { id: 2, label: "Without Add", value: false },
    ],
  },
];
