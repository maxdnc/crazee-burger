import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const getSelectOptionConfig = (newProduct) => [
  {
    name: "isAvailable",
    label: "Product Availability:",
    id: "isAvailable",
    Icon: <FiPackage />,
    value: newProduct.isAvailable,
    className: "isAvailable",
    options: [
      { id: 1, label: "In Stocks", value: true },
      { id: 2, label: "Sold-out", value: false },
    ],
  },
  {
    name: "isAdvertised",
    label: "Add Option:",
    id: "isAdvertised",
    Icon: <GoMegaphone />,
    value: newProduct.isAdvertised,
    className: "add-option",
    options: [
      { id: 1, label: "With Ad", value: true },
      { id: 2, label: "No Ad", value: false },
    ],
  },
];
