// GET Request
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const customFetch = async (
  endpoint: string,
  { method = "GET", headers = {} } = {}
) => {
  const url = `${BASE_URL}${endpoint}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Network response was not ok");
  }

  return response.json();
};
