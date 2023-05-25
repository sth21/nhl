import { useState } from "react";
import {
  StyledPageWrapper,
  StyledPageContentWrapper,
  StyledPageHeader,
  StyledOptionContainer,
  StyledOption,
} from "../../StyledComponents/General/GeneralComponents";
import TeamTable from "./TeamTable";
import PlayerTable from "./PlayerTable";
import YearManager from "../YearManager";

export default function Stats() {
  const currentYear =
    new Date().getMonth() >= 10
      ? new Date().getFullYear()
      : new Date().getFullYear() - 1;

  const [tableSettings, setTableSettings] = useState({
    type: "Team",
    year: currentYear,
  });

  return tableSettings ? (
    <StyledPageWrapper>
      <StyledPageContentWrapper>
        <StyledPageHeader>
          {tableSettings.type + " Statistics"}
        </StyledPageHeader>
        <YearManager currentYear={currentYear} setOptions={setTableSettings} />
        <StyledOptionContainer>
          <StyledOption
            disabled={tableSettings.type === "Team"}
            onClick={() =>
              setTableSettings((prevSettings) => {
                return { ...prevSettings, type: "Team" };
              })
            }
          >
            Team
          </StyledOption>
          <StyledOption
            disabled={tableSettings.type === "Skater"}
            onClick={() =>
              setTableSettings((prevSettings) => {
                return { ...prevSettings, type: "Skater" };
              })
            }
          >
            Skater
          </StyledOption>
          <StyledOption
            disabled={tableSettings.type === "Goalie"}
            onClick={() =>
              setTableSettings((prevSettings) => {
                return { ...prevSettings, type: "Goalie" };
              })
            }
          >
            Goalie
          </StyledOption>
        </StyledOptionContainer>
        {tableSettings.type === "Team" ? (
          <TeamTable tableSettings={tableSettings} />
        ) : tableSettings.type === "Skater" ? (
          <PlayerTable tableSettings={tableSettings} defaultParam="points" />
        ) : (
          <PlayerTable tableSettings={tableSettings} defaultParam="wins" />
        )}
      </StyledPageContentWrapper>
    </StyledPageWrapper>
  ) : (
    <></>
  );
}
