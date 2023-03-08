import Twitter from './../../../Media/twitter.png';
import Facebook from './../../../Media/facebook.png';
import Instagram from './../../../Media/instagram.png';
import Giphy from './../../../Media/giphy.png';
import Newsletter from './../../../Media/newsletter.png';
import Podcast from './../../../Media/podcast.png';
import Twitch from './../../../Media/twitch.png';
import Youtube from './../../../Media/youtube.png';
import Tiktok from './../../../Media/tiktok.png';
import Snapchat from './../../../Media/snapchat.png';


export default function SocialMediaWidget(props) {
    
    return (
        <div>
            <p>Follow us</p>
            <div>
                <div>
                    <img src={Twitter} alt="logo"></img>
                    <p>Twitter</p>
                </div>
                <div>
                    <img src={Facebook} alt="logo"></img>
                    <p>Facebook</p>
                </div>
                <div>
                    <img src={Instagram} alt="logo"></img>
                    <p>Instagram</p>
                </div>
                <div>
                    <img src={Tiktok} alt="logo"></img>
                    <p>Tiktok</p>
                </div>
                <div>
                    <img src={Youtube} alt="logo"></img>
                    <p>Youtube</p>
                </div>
                <div>
                    <img src={Twitch} alt="logo"></img>
                    <p>Twitch</p>
                </div>
                <div>
                    <img src={Snapchat} alt="logo"></img>
                    <p>Snapchat</p>
                </div>
                <div>
                    <img src={Giphy} alt="logo"></img>
                    <p>Giphy</p>
                </div>
                <div>
                    <img src={Podcast} alt="logo"></img>
                    <p>Podcast</p>
                </div>
                <div>
                    <img src={Newsletter} alt="logo"></img>
                    <p>Newsletter</p>
                </div>
            </div>
        </div>
    );
}