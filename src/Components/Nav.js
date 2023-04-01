import NHL_LOGO from "../Media/nhl.svg";
import GOOGLE_LOGO from "../Media/google.png";

import {
  StyledNav,
  StyledLogo,
  StyledIcon,
  StyledNavWrapper,
  StyledLink,
  StyledLoginContainer,
} from "../StyledComponents/NavComponents";

export default function Nav() {
  return (
    <StyledNav>
      <StyledLink to="/">
        <StyledLogo src={NHL_LOGO} alt="The NHL logo" />
      </StyledLink>
      <StyledNavWrapper pushRight>
        <StyledLink to="/scores">Scores</StyledLink>
        <StyledLink to="/schedule">Schedule</StyledLink>
        <StyledLink to="/standings">Standings</StyledLink>
        <StyledLink to="/stats">Stats</StyledLink>
        <StyledLink to="/players">Players</StyledLink>
        <StyledLink to="draft">Draft</StyledLink>
      </StyledNavWrapper>
      <StyledNavWrapper>
        <StyledLink to="https://shop.nhl.com/" target="_blank">
          Shop
        </StyledLink>
        <StyledLink to="https://ticketmaster.com/nhl" target="_blank">
          Tickets
        </StyledLink>
        <StyledLink to="https://plus.espn.com/nhl" target="_blank">
          Streaming
        </StyledLink>
        <StyledLoginContainer>
          <p>Log in</p>
          <StyledIcon src={GOOGLE_LOGO} alt="The Google logo"></StyledIcon>
        </StyledLoginContainer>
      </StyledNavWrapper>
    </StyledNav>
  );
}
