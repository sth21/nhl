import styled from "styled-components";

const StyledRinkWrapper = styled.div`
  position: relative;
  height: auto;
  width: 90%;
  margin: 3em;
`;

const StyledRink = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledCenterIceLogo = styled.img`
  opacity: 0.9;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  position: absolute;
  min-width: 15%;
  height: auto;
`;

const StyledPlayPNG = styled.img`
  height: 4em;
  width: 4em;
  position: absolute;
  top: ${(props) => (props.top ? props.top : 0)};
  right: ${(props) => (props.right ? props.right : 0)};
  filter: ${(props) =>
    props.color
      ? "opacity(.5) drop-shadow(0 0 0 " + props.color + ") saturate(1000%)"
      : ""};
`;

export { StyledRinkWrapper, StyledRink, StyledCenterIceLogo, StyledPlayPNG };
