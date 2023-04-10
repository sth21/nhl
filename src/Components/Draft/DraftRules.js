import {
  StyledLegendWrapper as StyledDraftRulesWrapper,
  StyledPageHeader,
  StyledRules,
} from "../../StyledComponents/General/GeneralComponents";

export default function DraftRules() {
  return (
    <StyledDraftRulesWrapper>
      <StyledPageHeader>Determining the NHL Draft Order</StyledPageHeader>
      <StyledRules>
        <li>All teams missing the playoffs are in the Lottery</li>
        <li>
          Teams with the least points get more chances at winning the Lottery
        </li>
        <li>
          The 1st overall pick is awarded by a drawing of ping pong balls. A
          team can only jump ten spots, so only the top 11 teams are eligible
          for the 1st pick. If a team in the 12-16 range wins the first drawing,
          the first pick will remain with the worst team.
        </li>
        <li>
          The 2nd overall pick is awarded by a drawing of ping pong balls. If a
          team in the 12-16 range won the first drawing, the worst team keeps
          the 1st pick and is excluded from the second drawing. Like the first
          drawing, the second winner can only jump ten spots.
        </li>
        <li>
          Teams are only allowed to improve their positioning via the Lottery
          twice in a five year period (beginning with the 2022 Lottery).
        </li>
        <li>
          Ties are broken by teams' total number of regulation wins (RW),
          regulation and non-shootout overtime wins (ROW), and then head-to-head
          if still tied
        </li>
        <li>
          Playoff teams that did not win their divisions and did not make the
          conference finals, sorted by points, are assigned the next picks
        </li>
        <li>
          Playoff teams that won their divisions and did not make the conference
          finals, sorted by points, are assigned the next picks
        </li>
        <li>
          Conference finals losers sorted by points are assigned picks 29 and 30
        </li>
        <li>Stanley Cup runner-up is assigned pick 31</li>
        <li>Stanley Cup champion is assigned pick 32</li>
      </StyledRules>
    </StyledDraftRulesWrapper>
  );
}
