import axios from "axios";

axios.defaults.withCredentials = true;

const getAdminEventById = async (evenId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(
      baseURL + `/admin/events/${evenId}`
    );
    return response.data;
  } catch (error) {
    console.error("[getAdminEventById] error: ", error);
    throw error;
  }
};

export { getAdminEventById };

