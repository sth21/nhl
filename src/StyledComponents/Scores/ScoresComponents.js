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
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  position: absolute;
  min-width: 15%;
  height: auto;
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
  },
}));

const StyledToolTipWrapper = styled.div`
  && {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    padding: 1em;

    & > div {
      display: flex;
      justify-content: space-between;
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
};
