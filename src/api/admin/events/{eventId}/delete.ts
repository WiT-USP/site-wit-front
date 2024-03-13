import axios from "axios";

axios.defaults.withCredentials = true;

const deleteAdminEventById = async (eventId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(
      baseURL + `/admin/events/${eventId}`
    );
    return response.data;
  } catch (error) {
    console.error("[deleteAdminEventById] error: ", error);
    throw error;
  }
};

export { deleteAdminEventById };

