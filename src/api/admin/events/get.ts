import axios from "axios";

axios.defaults.withCredentials = true;

const getAdminEvents = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(
      baseURL + `/admin/events?searchParam=${search}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching web events:", error);
    throw error;
  }
};

export { getAdminEvents };
