import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";

export const tabsConfig = [
  {
    index: "add",
    label: "Add product",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Edit product",
    Icon: <MdModeEditOutline />,
    Content: <EditForm />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
