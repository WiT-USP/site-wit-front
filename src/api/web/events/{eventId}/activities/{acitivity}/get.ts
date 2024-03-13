import axios from "axios";

const getWebActivity = async (eventId: number, activityId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(
      baseURL + `/web/events/${eventId}/activities/${activityId}`
    );
    return response.data;
  } catch (error) {
    console.error("[getWebActivity] error: ", error);
    throw error;
  }
};

export { getWebActivity };

