import { TRestaurant } from "model/restaurant";
import { useEffect, useState } from "react";
import { customFetch } from "utils/api/customFetch";

export const useGetRestaurant = () => {
  const [data, setData] = useState<TRestaurant>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        // TODO:
        // const resp = await customFetch(/challenge/venue/9, {
        const resp = await customFetch("/restaurant", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        // const result: TRestaurant = await resp.json();
        const result = await resp;
        setData(result);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading };
};
