import { ApiUrl } from "../constants/url";

export const apiClient = async (urlSuffix: string, method: string) => {
  const response = await fetch(ApiUrl.BASE_API_URL + urlSuffix, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.json();
};
