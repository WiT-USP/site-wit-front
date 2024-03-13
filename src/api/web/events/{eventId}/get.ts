import axios from "axios";

const getWebEvent = async (eventId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(baseURL + `/web/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("[getWebEvent] error: ", error);
    throw error;
  }
};

export { getWebEvent };

