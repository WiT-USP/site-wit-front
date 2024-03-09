import axios from "axios";

axios.defaults.withCredentials = true;

interface Event {
  eventName: string;
  startDate: string;
  endDate: string;
  description?: string;
  cover?: string;
  coffeValue?: number;
  coffeePaymentLink?: string;
  driveGaleryLink?: string;
}

const postAdminEvents = async (event: Event) => {
  const baseURL = process.env.REACT_APP_BASE_URL_BACK_API!;

  try {
    const response = await axios.post(baseURL + `/admin/events`, {
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      cover: event.cover,
      coffeValue: event.coffeValue,
      coffeePaymentLink: event.coffeePaymentLink,
      driveGaleryLink: event.driveGaleryLink
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching web events:", error);
    throw error;
  }
};

export { postAdminEvents };

