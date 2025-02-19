// GET Request

interface CustomFetchOptions extends RequestInit {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
  mode?: "cors" | "no-cors" | "same-origin" | "navigate";
}

export const customFetch = async (
  endpoint: string,
  { method = "GET", headers = {}, mode = "cors" }: CustomFetchOptions = {}
) => {
  const url = `${process.env.NODE_ENV !== "production" ? "" : "/api"}${endpoint}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    mode,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Network response was not ok");
  }

  return response.json();
};
