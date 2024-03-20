import axios from "axios";

axios.defaults.withCredentials = true;

interface ActivityParams {
  activityId: number
  activityName?: string;
  responsible?: string;
  description?: string;
  startTime?: string;
  endTime?: string; 
  registrationAt?: string
  eventId?: number
}


const updateAdminActivityById = async (event: ActivityParams) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.put(
      baseURL + `/admin/activities/${event.activityId}`,{
        activityName: event?.activityName,
        responsible: event?.responsible,
        description: event?.description,
        startTime: event?.startTime,
        endTime: event?.endTime,
        registrationAt: event?.registrationAt,
        eventId: event?.eventId
      }
    );
    return response.data;
  } catch (error) {
    console.error("[updateAdminActivityById] error: ", error);
    throw error;
  }
};

export { updateAdminActivityById };

