import Twitter from "./../../../Media/twitter.png";
import Facebook from "./../../../Media/facebook.png";
import Instagram from "./../../../Media/instagram.png";
import Giphy from "./../../../Media/giphy.png";
import Newsletter from "./../../../Media/newsletter.png";
import Podcast from "./../../../Media/podcast.png";
import Twitch from "./../../../Media/twitch.png";
import Youtube from "./../../../Media/youtube.png";
import Tiktok from "./../../../Media/tiktok.png";
import Snapchat from "./../../../Media/snapchat.png";

import {
  StyledHeader,
  StyledSMLink,
  StyledSMWrapper,
} from "../../../StyledComponents/Home/WidgetComponents";

export default function SocialMediaWidget(props) {
  return (
    <div>
      <StyledHeader>Follow NHL</StyledHeader>
      <StyledSMWrapper>
        <StyledSMLink to="https://www.twitter.com/nhl" target="_blank">
          <img src={Twitter} alt="logo"></img>
          <p>Twitter</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.facebook.com/NHL/" target="_blank">
          <img src={Facebook} alt="logo"></img>
          <p>Facebook</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.instagram.com/nhl/" target="_blank">
          <img src={Instagram} alt="logo"></img>
          <p>Instagram</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.tiktok.com/@nhl?lang=en" target="_blank">
          <img src={Tiktok} alt="logo"></img>
          <p>Tiktok</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.youtube.com/nhl" target="_blank">
          <img src={Youtube} alt="logo"></img>
          <p>Youtube</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.twitch.tv/nhl" target="_blank">
          <img src={Twitch} alt="logo"></img>
          <p>Twitch</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.snapchat.com/add/nhl" target="_blank">
          <img src={Snapchat} alt="logo"></img>
          <p>Snapchat</p>
        </StyledSMLink>
        <StyledSMLink to="https://www.giphy.com/nhl" target="_blank">
          <img src={Giphy} alt="logo"></img>
          <p>Giphy</p>
        </StyledSMLink>
        <StyledSMLink
          to="https://www.nhl.com/multimedia/podcasts"
          target="_blank"
        >
          <img src={Podcast} alt="logo"></img>
          <p>Podcasts</p>
        </StyledSMLink>
        <StyledSMLink
          to="https://jebbit.nhl.com/k38ek6ta?L=Owned+Web&JC=leftrail"
          target="_blank"
        >
          <img src={Newsletter} alt="logo"></img>
          <p>Newsletter</p>
        </StyledSMLink>
      </StyledSMWrapper>
    </div>
  );
}
