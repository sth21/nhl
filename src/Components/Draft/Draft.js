import DraftSimulator from "./DraftSimulator";

import { useMemo } from "react";
import useFetch from "./../../Utils/useFetch";
import useLogos from "./../../Utils/useLogos";

export default function Draft() {
  const draftOrder = useFetch(
    "https://statsapi.web.nhl.com/api/v1/standings/byLeague"
  );
  const logos = useLogos("nhl");

  const filteredDraftOrder = useMemo(() => {
    if (!draftOrder) return null;
    const draftOdds = [
      0.185, 0.135, 0.115, 0.095, 0.085, 0.075, 0.065, 0.06, 0.05, 0.035, 0.03,
      0.025, 0.02, 0.015, 0.005, 0.005, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0,
    ];
    return draftOrder.records[0].teamRecords.reverse().map((team, index) => {
      return { name: team.team.name, odds: draftOdds[index], id: team.team.id };
    });
  }, [draftOrder]);

  console.log(draftOrder);
  console.log(filteredDraftOrder);

  return (
    <div>
      {filteredDraftOrder ? (
        <DraftSimulator logos={logos} draftOrder={filteredDraftOrder} />
      ) : (
        <></>
      )}
    </div>
  );
}