import { instance } from "../custom-axios/axios";

export const wineWithMeService = {
  saveContact: (name, email, subject, message) => {
    return instance.post("/contact/save", { name, email, subject, message });
  },
  loginUser: (username, password) => {
    return instance.post("/user/login", { username, password });
  },
  registerUser: (name, surname, username, password, confirmPassword) => {
    return instance.post("/user/register", {
      name,
      surname,
      username,
      password,
      confirmPassword,
    });
  },
};
