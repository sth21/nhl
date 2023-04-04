import {
  StyledOptionContainer,
  StyledPageOption,
} from "../../StyledComponents/General/GeneralComponents";
import { useEffect, useState } from "react";

export default function StandingsOption(props) {
  const [areConferences, setAreConferences] = useState(true);
  const [areDivisions, setAreDivisions] = useState(true);
  const [areWildCards, setAreWildCards] = useState(true);

  useEffect(() => {
    function setAvailableOptionsByYear(year) {
      if (year <= 1925 || (year >= 1938 && year <= 1966)) {
        setAreConferences(false);
        setAreDivisions(false);
        setAreWildCards(false);
      } else if (
        (year >= 1926 && year <= 1937) ||
        (year >= 1967 && year <= 1973)
      ) {
        setAreConferences(false);
        setAreDivisions(true);
        setAreWildCards(false);
      } else if (year >= 1974 && year <= 2012) {
        setAreConferences(true);
        setAreDivisions(true);
        setAreWildCards(false);
      } else {
        setAreConferences(true);
        setAreDivisions(true);
        setAreWildCards(true);
      }
    }

    setAvailableOptionsByYear(props.year);
  }, [props.year]);

  return (
    <StyledOptionContainer>
      <StyledPageOption
        onClick={() =>
          props.setStandingsOptions((prev) => ({
            ...prev,
            type: "byLeague",
          }))
        }
        disabled={props.type === "byLeague"}
      >
        League
      </StyledPageOption>
      {areConferences ? (
        <StyledPageOption
          onClick={() =>
            props.setStandingsOptions((prev) => ({
              ...prev,
              type: "byConference",
            }))
          }
          disabled={props.type === "byConference"}
        >
          Conference
        </StyledPageOption>
      ) : (
        <></>
      )}
      {areDivisions ? (
        <StyledPageOption
          onClick={() =>
            props.setStandingsOptions((prev) => ({
              ...prev,
              type: "byDivision",
            }))
          }
          disabled={props.type === "byDivision"}
        >
          Division
        </StyledPageOption>
      ) : (
        <></>
      )}
      {areWildCards ? (
        <StyledPageOption
          onClick={() =>
            props.setStandingsOptions((prev) => ({
              ...prev,
              type: "wildCardWithLeaders",
            }))
          }
          disabled={props.type === "wildCardWithLeaders"}
        >
          Wildcard
        </StyledPageOption>
      ) : (
        <></>
      )}
    </StyledOptionContainer>
  );
}
