import NHL from "./../Media/nhl.svg";

import { StyledFooterWrapper } from "../StyledComponents/FooterComponents";
import { StyledLink } from "../StyledComponents/NavComponents";

export default function Footer() {
  return (
    <StyledFooterWrapper>
      <img src={NHL} alt="NHL logo"></img>
      <p>
        This is not the official website of the NHL. This is a clone of the NHL
        website for the sole purpose of web development practice.
      </p>
      <p>
        Website created with ReactJS, Firebase, the ESPN API, and the NHL API.
      </p>
      <StyledLink
        style={{ textDecoration: "underline" }}
        to="https://github.com/sth21"
        target="_blank"
      >
        Take a look at my Github profile. Go Sabres.
      </StyledLink>
    </StyledFooterWrapper>
  );
}
