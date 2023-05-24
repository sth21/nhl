import NHL_LOGO from "../Media/nhl.svg";

import {
  StyledNav,
  StyledLogo,
  StyledNavWrapper,
  StyledLink,
} from "../StyledComponents/NavComponents";

export default function Nav() {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledLogo src={NHL_LOGO} alt="The NHL logo" />
      </StyledLink>
      <StyledNavWrapper>
        <StyledLink to="/scores">Scores</StyledLink>
        <StyledLink to="/standings">Standings</StyledLink>
        <StyledLink to="/stats">Stats</StyledLink>
        <StyledLink to="draft">Draft</StyledLink>
      </StyledNavWrapper>
      <StyledNavWrapper removeable>
        <StyledLink to="https://shop.nhl.com/" target="_blank">
          Shop
        </StyledLink>
        <StyledLink to="https://ticketmaster.com/nhl" target="_blank">
          Tickets
        </StyledLink>
        <StyledLink to="https://plus.espn.com/nhl" target="_blank">
          Streaming
        </StyledLink>
      </StyledNavWrapper>
    </StyledNav>
  );
}
