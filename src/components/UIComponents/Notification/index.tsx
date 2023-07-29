import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const notifyError = ({ message }: any) => {
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error",
  });

  return <ToastContainer />;
};
export const notifySuccess = ({ message }: any) => {
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    // newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success",
  });
};
export const notifyWarning = ({ message }: any) => {
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    // newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "warning",
  });
};
