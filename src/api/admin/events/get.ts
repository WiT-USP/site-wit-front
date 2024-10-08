import axios from "axios";

axios.defaults.withCredentials = true;

const getAdminEvents = async (search?: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(
      baseURL + `/admin/events?searchParam=${search}`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("[getAdminEvents] error: ", error);
    throw error;
  }
};

export { getAdminEvents };

