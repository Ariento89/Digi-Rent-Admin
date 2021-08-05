import { toast } from "react-toastify";

export default function useNotification() {
  const notify = (text, status, settings = {}) => {
    switch (status) {
      case "error":
        return toast.error(text, { ...settings });
      case "info":
        return toast.info(text, { ...settings });
      case "warning":
        return toast.warning(text, { ...settings });
      default:
        return toast.info(text, { ...settings });
    }
  };

  return notify;
}
