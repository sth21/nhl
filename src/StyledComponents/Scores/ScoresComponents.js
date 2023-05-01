import styled from "styled-components";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const StyledRinkWrapper = styled.div`
  position: relative;
  max-width: 100%;
`;

const StyledRink = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

const StyledCenterIceLogo = styled.img`
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  position: absolute;
  min-width: 15%;
  height: auto;
  opacity: 0.7;
`;

const StyledSideIceLogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  translate: -50% -50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSideIceLogo = styled.img`
  min-width: 30%;
  height: auto;
  opacity: 0.2;
`;

const StyledPlayerOnIceWrapper = styled.div.attrs((props) => ({
  style: {
    left: props.side === "L" ? props.distance + "px" : "auto",
    right: props.side === "R" ? props.distance + "px" : "auto",
  },
}))`
  display: flex;
  top: 50%;
  bottom: 50%;
  gap: 3em;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPlayerImgWrapper = styled.div`
  && {
    height: 3.5em;
    width: 3.5em;
    position: relative;
    border: 2px solid var(--grey);
    border-radius: 50%;

    & > img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`;

const StyledPlayPNG = styled.img.attrs((props) => ({
  style: {
    top: props.top ? props.top : 0,
    right: props.right ? props.right : 0,
    filter: props.color
      ? `opacity(.5) drop-shadow(0 0 0 ${props.color}) saturate(1000%)`
      : "",
  },
}))`
  height: auto;
  width: 3.5%;
  position: absolute;
`;

const StyledToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: "0",
    margin: "0",
    backgroundColor: "var(--white)",
  },
}));

const StyledToolTipWrapper = styled.div`
  && {
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    gap: 0.5em;
    word-wrap: break-word;
    box-shadow: 0 4px 6px rgb(0 0 0 / 20%);
    padding: 1em;

    & > div {
      display: flex;
      gap: 0.25em;
      align-items: center;
      justify-content: space-between;

      & > img {
        height: 2em;
        width: 2em;
      }
    }
  }
`;

const StyledPlayerLabel = styled.p.attrs((props) => ({
  style: {
    borderTop: props.color
      ? `4px solid ${props.color}`
      : "4px solid var(--grey)",
  },
}))`
  position: absolute;
  padding: 0.25em;
  bottom: -50%;
  border: 1px solid var(--grey);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1rem;
  background: var(--white);
  width: auto;
`;

const StyledFeedPlayerLabel = styled.p`
  && {
    padding: 0.25em;
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

const StyledFeedPlayerWrapper = styled.div`
  display: flex;
  gap: 0.25em;
  align-items: center;
`;

const StyledGameCenterGrid = styled.div`
  display: grid;
  max-width: 100%;
  grid-template: repeat(3, auto) / 7fr 13fr;
  grid-gap: 2em;
  padding: 4em;
`;

const StyledScoresWidgetWrapper = styled.div`
  background: var(--white);
  padding: 2em;
  box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
`;

const StyledPlayWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 3fr 7fr;
  width: 100%;
  padding: 1em 0em;
  border-top: 5px dashed var(--grey);
`;

const StyledPlayMainLabel = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 0.5em;

    & > div {
      display: flex;
      gap: 1em;
      align-items: center;
    }
  }
`;

const StyledPlaySideLabel = styled.div`
  && {
    display: flex;
    padding: 0em 1em;
    gap: 1em;
    align-items: center;
  }
`;

export {
  StyledRinkWrapper,
  StyledRink,
  StyledCenterIceLogo,
  StyledPlayPNG,
  StyledToolTip,
  StyledToolTipWrapper,
  StyledSideIceLogoWrapper,
  StyledSideIceLogo,
  StyledPlayerOnIceWrapper,
  StyledPlayerImgWrapper,
  StyledPlayerLabel,
  StyledGameCenterGrid,
  StyledScoresWidgetWrapper,
  StyledFeedPlayerLabel,
  StyledFeedPlayerWrapper,
  StyledPlayWrapper,
  StyledPlayMainLabel,
  StyledPlaySideLabel,
};
