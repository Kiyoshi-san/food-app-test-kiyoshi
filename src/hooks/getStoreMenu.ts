import { useState } from "react";
import { TStore } from "model/storeMenu";
import { useEffect } from "react";

export const getStoreMenu = () => {
  const [data, setData] = useState<TStore>();

  useEffect(() => {
    (async () => {
      try {
        // const resp = await fetch("https://cdn-dev.preoday.com/challenge/menu", {
        const resp = await fetch("https://localhost:3500/menu", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        });
        const result = await resp.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
      return data;
    })();
  }, []);
};
