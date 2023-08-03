import { TOKEN_URL, USER_LIST_URL } from "../constants";
import { api, private_api } from "./axios";

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


export const fetchUsers = async () => {
  try {
    const response = await private_api.get(USER_LIST_URL);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}