import { toast, Flip } from "react-toastify";
export const errorNotification = (error) => {
  if (error?.response?.data?.message) {
    toast.error(error.response?.data.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(error.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const successNotification = (
  response,
  message = "Something went wrong"
) => {
  const msg = response?.data?.data?.message
    ? response.data.data.message
    : message;
  toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    transition: Flip,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
