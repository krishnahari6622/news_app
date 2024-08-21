import axios from "axios";

export const getAPI = async (endURL) => {
  let prepareHeader = {
    "Content-Type": "application/json",
  };

  var apiConfig = {
    method: "get",
    url: endURL,
    headers: prepareHeader,
  };

  try {
    const response = await axios(apiConfig);
    return response.data;
  } catch (error) {
    console.log("Error occurred while fetching data");
    return null;
  }
};
