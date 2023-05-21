import { useState, useEffect } from "react";

export default function useFetch(url, interval = null) {
  const [data, setData] = useState(null);

  // Run fetch, set interval if defined in params
  useEffect(() => {
    console.log("USE FETCH");
    if (url === "") return;

    // Convert URL to JSON to JS
    const fetchData = () =>
      fetch(url, { mode: "cors" })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));

    fetchData();

    if (interval) {
      const intervalID = setInterval(fetchData, interval);
      return () => clearInterval(intervalID);
    }
  }, [url, interval]);

  return data;
}
