import { useState, useEffect } from "react";
import { DB } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function useTrades() {
  const [trades, setTrades] = useState(null);

  useEffect(() => {
    const getTrades = () => {
      getDocs(collection(DB, "draft"))
        .then((res) =>
          res.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        )
        .then((res) => res.filter((doc) => doc.tradedTo))
        .then((res) =>
          setTrades(
            res.reduce((acc, cur) => {
              acc[cur.id] = cur.tradedTo;
              return acc;
            }, {})
          )
        )
        .catch((err) => console.log(err));
    };

    getTrades();
  }, []);

  return trades;
}
