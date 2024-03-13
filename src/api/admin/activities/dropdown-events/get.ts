import axios from "axios";

axios.defaults.withCredentials = true;

const getAdminActivitiesDropdown = async () => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;
  try {
    const response = await axios.get(
      baseURL +'/admin/activities/dropdown'
    );
    return response.data;
  } catch (error) {
    console.error("[getAdminActivitiesDropdown] error: ", error);
    throw error;
  } 
};

export { getAdminActivitiesDropdown };

