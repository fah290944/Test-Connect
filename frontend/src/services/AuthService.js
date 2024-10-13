import axios from "axios";
import api from "./api";

export const loginService = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response?.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const signupService = async (email, password , firstName, lastName, phone) => {
  try {
    const response = await api.post("/register", { email,password ,firstName,lastName,phone });
    return response?.data;
  } catch (error) {
    console.error("Sign Up failed", error);
    throw error;
  }
};
