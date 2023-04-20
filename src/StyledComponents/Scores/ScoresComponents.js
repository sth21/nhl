import styled from "styled-components";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const StyledRinkWrapper = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin: 3em 0em;
`;

const StyledRink = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
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

const StyledSideIceLogo = styled(StyledCenterIceLogo).attrs((props) => ({
  style: {
    left: props.side === "L" ? "25%" : "75%",
  },
}))`
  top: 50%,
  min-width: 10%;
  opacity: 0.5;
`;

const GenericPlayerWrapper = styled.div`
  translate: -50% -50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledGoalieOnIceWrapper = styled(GenericPlayerWrapper).attrs(
  (props) => ({
    style: {
      left: props.side === "L" ? "3.33%" : "96.66%",
    },
  })
);

const StyledDefensemanOnIceWrapper = styled(GenericPlayerWrapper).attrs(
  (props) => ({
    style: {
      left: props.side === "L" ? "22%" : "78%",
    },
  })
);

const StyledForwardOnIceWrapper = styled(GenericPlayerWrapper).attrs(
  (props) => ({
    style: {
      left: props.side === "L" ? "40%" : "60%",
    },
  })
);

const StyledPlayerImgWrapper = styled.div`
  && {
    height: 3em;
    width: 3em;
    border: 1px solid var(--grey);
    border-radius: 50%;

    & > img {
      height: 100%;
      width: 100%;
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
      align-items: center;
      justify-content: space-between;

      & > img {
        height: 3em;
        width: 3em;
      }
    }
  }
`;

export {
  StyledRinkWrapper,
  StyledRink,
  StyledCenterIceLogo,
  StyledPlayPNG,
  StyledToolTip,
  StyledToolTipWrapper,
  StyledSideIceLogo,
  StyledGoalieOnIceWrapper,
  StyledDefensemanOnIceWrapper,
  StyledForwardOnIceWrapper,
  StyledPlayerImgWrapper,
};
