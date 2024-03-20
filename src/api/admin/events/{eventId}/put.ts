import axios from "axios";

axios.defaults.withCredentials = true;

interface EventParams {
  eventId: number;
  eventName?: string;
  local?: string;
  description?: string;
  driveGalleryLink?: string;
  coffeeValue?: number;
  startDate?: string;
  endDate?: string;
}


const updateAdminEventById = async (event: EventParams) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.put(
      baseURL + `/admin/events/${event.eventId}`,{
        eventName: event?.eventName,
        local: event?.local,
        description: event?.description,
        driveGalleryLink: event?.driveGalleryLink,
        coffeeValue: event?.coffeeValue,
        startDate: event?.startDate,
        endDate: event?.endDate,
      }
    );
    return response.data;
  } catch (error) {
    console.error("[updateAdminEventById] error: ", error);
    throw error;
  }
};

export { updateAdminEventById };

