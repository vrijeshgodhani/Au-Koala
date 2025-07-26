import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default class AxiosWrapper {
  static token = null;

  static retrivetoken = () => {
    try {
      AxiosWrapper.token = localStorage.getItem("auth");
       console.log("🪪 Token from localStorage:", AxiosWrapper.token);
    } catch (e) {
      console.error("Error retrieving token:", e);
    }
  };

  static post = async ({ endpoints, body }) => {
    AxiosWrapper.retrivetoken();

    return axios.post(`${BASE_URL}/${endpoints}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AxiosWrapper.token}`, // ✅ This is now correct
      },
    });
  };

  // Optional GET example
  static get = async (endpoints) => {
    AxiosWrapper.retrivetoken();

    return axios.get(`${BASE_URL}/${endpoints}`, {
      headers: {
        Authorization: `Bearer ${AxiosWrapper.token}`,
      },
    });
  };
}
