import { toast } from "react-toastify";

export const toastAdminModeNotify = () => {
  toast.info("Admin Mode Activated", {
    theme: "dark",
    position: "bottom-right",
    autoClose: 2300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
