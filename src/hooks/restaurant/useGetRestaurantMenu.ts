import { useState } from "react";
import { TStore } from "model/restaurantMenu";
import { useEffect } from "react";
import { customFetch } from "utils/api/customFetch";

export const useGetRestaurantMenu = () => {
  const [data, setData] = useState<TStore | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const resp = await customFetch("/api/menu", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result: TStore = await resp;
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, loading };
};
