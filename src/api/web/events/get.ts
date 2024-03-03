import axios from "axios";

const getWebEvents = async () => {
  try {
    const response = await axios.get("http://localhost:3333/web/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching web events:", error);
    throw error;
  }
};

export { getWebEvents };
