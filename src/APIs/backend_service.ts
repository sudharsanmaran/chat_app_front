import { TOKEN_URL } from "../constants";
import { api } from "./axios";

type LoginParams = {
  username: string;
  password: string;
};

export const login = async (params: LoginParams) => {
  try {
    const response = await api.post(TOKEN_URL, params);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
