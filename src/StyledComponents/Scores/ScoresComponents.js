import styled from "styled-components";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const StyledRinkWrapper = styled.div`
  position: relative;
  padding: 3em;
  margin: 3em 0em;
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

const StyledGoalieOnIceWrapper = styled.div.attrs((props) => ({
  style: {
    left: props.side === "L" ? "9%" : "86%",
  },
}))`
  display: flex;
  top: 50%;
  bottom: 50%;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledDefensemanOnIceWrapper = styled.div.attrs((props) => ({
  style: {
    left: props.side === "L" ? "28%" : "67%",
  },
}))`
  display: flex;
  top: 50%;
  bottom: 50%;
  gap: 5em;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForwardOnIceWrapper = styled.div.attrs((props) => ({
  style: {
    left: props.side === "L" ? "42%" : "53%",
  },
}))`
  display: flex;
  top: 50%;
  bottom: 50%;
  gap: 5em;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPlayerImgWrapper = styled.div`
  && {
    height: 5em;
    width: 5em;
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
  width: 3.25%;
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
    font-size: 1.1rem;
    gap: 1em;
    word-wrap: break-word;
    box-shadow: 0 4px 6px rgb(0 0 0 / 20%);
    padding: 1em;

    & > div {
      display: flex;
      gap: 0.5em;
      align-items: center;
      justify-content: space-between;

      & > img {
        height: 3em;
        width: 3em;
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
  bottom: -40%;
  border: 1px solid var(--grey);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1rem;
  background: var(--white);
  width: auto;
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
  StyledGoalieOnIceWrapper,
  StyledDefensemanOnIceWrapper,
  StyledForwardOnIceWrapper,
  StyledPlayerImgWrapper,
  StyledPlayerLabel,
};
