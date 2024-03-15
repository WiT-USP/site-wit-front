import axios from "axios";

axios.defaults.withCredentials = true;

const getAdminActivityById = async (activityId: number) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.get(
      baseURL + `/admin/activities/${activityId}`
    );
    return response.data;
  } catch (error) {
    console.error("[getAdminActivityById] error: ", error);
    throw error;
  }
};

export { getAdminActivityById };

