import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";

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
