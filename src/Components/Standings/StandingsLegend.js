import {
  StyledPageHeader,
  StyledLegend,
  StyledBoldWrapper,
  StyledLegendWrapper,
} from "../../StyledComponents/General/GeneralComponents";

export default function StandingsLegend() {
  return (
    <StyledLegendWrapper>
      <StyledPageHeader>Legend</StyledPageHeader>
      <StyledLegend>
        <li>
          <StyledBoldWrapper>x - </StyledBoldWrapper>Clinched Playoff Spot
        </li>
        <li>
          <StyledBoldWrapper>p - </StyledBoldWrapper>Presidents' Trophy
        </li>
        <li>
          <StyledBoldWrapper>GP - </StyledBoldWrapper>Games Played
        </li>
        <li>
          <StyledBoldWrapper>W - </StyledBoldWrapper>Wins (worth two points)
        </li>
        <li>
          <StyledBoldWrapper>L - </StyledBoldWrapper>Losses (worth zero points)
        </li>
        <li>
          <StyledBoldWrapper>OT - </StyledBoldWrapper>OT/SO Losses (worth one
          point)
        </li>
        <li>
          <StyledBoldWrapper>PTS - </StyledBoldWrapper>Points
        </li>
        <li>
          <StyledBoldWrapper>P% - </StyledBoldWrapper>Points Percentage
        </li>
        <li>
          <StyledBoldWrapper>RW - </StyledBoldWrapper>Regulation Wins
        </li>
        <li>
          <StyledBoldWrapper>ROW - </StyledBoldWrapper>Regulation/OT Wins
        </li>
        <li>
          <StyledBoldWrapper>GF - </StyledBoldWrapper>Goals For
        </li>
        <li>
          <StyledBoldWrapper>GA - </StyledBoldWrapper>Goals Against
        </li>
        <li>
          <StyledBoldWrapper>DIFF - </StyledBoldWrapper>Goal Differential
        </li>
        <li>
          <StyledBoldWrapper>STRK - </StyledBoldWrapper>Streak
        </li>
      </StyledLegend>
    </StyledLegendWrapper>
  );
}
