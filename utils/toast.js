import { showToast } from "nextjs-toast-notify";

export const successToast = (message) => {
  showToast.success(message, {
    duration: 4000,
    progress: true,
    position: "top-right",
    transition: "bounceIn",
    icon: "",
    sound: true,
  });
};

export const errorToast = (message) => {
  showToast.error(message, {
    duration: 4000,
    progress: true,
    position: "top-right",
    transition: "bounceIn",
    icon: "",
    sound: true,
  });
};
