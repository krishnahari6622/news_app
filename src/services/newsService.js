import config from "../constants/config";
import { getAPI } from "../utils/servicesUtil";

export const fetchNews = async () => {
  const response = await getAPI(
    `${config.BASE_URL}/everything?apiKey=${config.API_KEY}&from=2024-07-22&to=2024-08-17&language=en&q=india`
  );
  return response;
};
