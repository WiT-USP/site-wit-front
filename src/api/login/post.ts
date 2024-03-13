import axios from "axios";

axios.defaults.withCredentials = true;

interface User {
  email: string;
  password: string;
}

const postAdminLogin = async (user: User) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.post(baseURL + `/login`, {
      password: user.password,
      email: user.email,
    });
    return response.data;
  } catch (error) {
    console.error("[postAdminLogin] error: ", error);
    throw error;
  }
};

export { postAdminLogin };

