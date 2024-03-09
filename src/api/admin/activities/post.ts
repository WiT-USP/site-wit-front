import axios from "axios";

axios.defaults.withCredentials = true;

interface Activity {
  activityName: string;
  startTime: string;
  endTime: string;
  description: string;
  responsible: string;
  eventId: number;
  registrationAt: string;
}



const postAdminActivities = async (activity: Activity) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.post(baseURL + `/admin/events`, {
      activityName: activity.activityName,
      startTime: activity.startTime,
      endTime: activity.endTime,
      description: activity.description,
      responsible: activity.responsible,
      eventId: activity.eventId,
      registrationAt: activity.registrationAt
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching web events:", error);
    throw error;
  }
};

export { postAdminActivities };

