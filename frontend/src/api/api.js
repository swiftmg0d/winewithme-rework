import { instance } from "../custom-axios/axios";

export const wineWithMeService = {
  saveContact: (name, email, subject, message) => {
    return instance.post("/contact/save", { name, email, subject, message });
  },
};
