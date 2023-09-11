import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm/AddForm";
import EditForm from "./AdminPanel/EditForm/EditForm";
import HintMessage from "./AdminPanel/EditForm/HintMessage";

export const getTabsConfig = (isProductSelected) => [
  {
    index: "add",
    label: "Add",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Edit ",
    Icon: <MdModeEditOutline />,
    Content: isProductSelected ? <EditForm /> : <HintMessage />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
