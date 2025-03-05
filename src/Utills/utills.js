import { emailRegux, passwordRegux } from "./constants.js";
export const validateEmail = (email) => {
  return emailRegux.test(email);
};

export const validatePassword = (password) => {
  console.log( passwordRegux.test(password), " passwordRegux.test(password)", password);
  
  return passwordRegux.test(password);
};
