import styled, { createGlobalStyle } from "styled-components";
import { Table, TableCell, TableContainer, TableRow } from "@mui/material";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body, #root {
        line-height: 1;
        width: inherit;
        min-height: inherit;
        position: absolute;
        z-index: 2;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img {
        height: 2.5em;
        width: 2.5em;
    }

    :root {
        font-size: 14px;
        width: 100%;
        min-height: 100vh;
        font-family: 'Sintony', sans-serif;
        --grey: #ECECEC;
        --darkgrey: #F7F7F7;
        --black: #000000;
        --white: #FFFFFF;
        --red: #d00;
        background-color: var(--grey);
    }
`;

const StyledOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1em;
  padding: 1em 0em;

  @media (max-width: 500px) {
    gap: 0.25em;
  }
`;

const StyledOption = styled.button`
  && {
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  }
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
`;

const StyledHeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 1em 0em;
  vertical-align: center;

  @media (max-width: 550px) {
    gap: 2em;
  }
`;

const StyledTableCell = styled(TableCell)`
  && {
    text-align: center;
    padding: 0.625em;
    font: inherit;
    font-size: 0.9rem;
    border-bottom: 1px solid var(--grey);
  }
`;

const StyledTableHeader = styled(StyledTableCell)`
  && {
    font-weight: bold;
    font-size: inherit;

    & > div {
      justify-content: center;
      cursor: pointer;
    }
  }
`;

const StyledHeader = styled.h4`
  font-weight: bold;
  font-size: 1.1rem;
  width: 100%;
  padding-bottom: 1em;
  border-bottom: 1px solid var(--grey);

  @media (max-width: 550px) {
    padding-bottom: 0.5em;
  }
`;

const StyledTableContainer = styled(TableContainer)`
  padding: 1em 0em;
`;

const StyledFlexCell = styled.div`
  && {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;

const StyledPageHeader = styled(StyledHeader)`
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

const StyledPageWrapper = styled.div`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;

  @media (max-width: 550px) {
    padding: 1em;
  }

  @media (max-width: 450px) {
    padding: 0.5em;
  }

  & > div {
    box-sizing: border-box;
    background: var(--white);
    padding: 3em 4em;
    box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    min-width: 80%;
    max-width: 100%;

    @media (max-width: 550px) {
      padding: 1em;
    }

    @media (max-width: 450px) {
      padding: 0.5em;
    }
  }
`;

const StyledPageContentWrapper = styled.div`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

const StyledPageTable = Table;

const StyledPageTableCell = styled(StyledTableCell)`
  && {
    text-align: center;
    padding: 1em;
    font-size: 1rem;

    @media (max-width: 550px) {
      font-size: 0.75rem;
    }
  }
`;

const StyledPageTableHeader = styled(StyledTableHeader)`
  && {
    text-align: center;
  }
`;

const StyledPageTableHead = styled(TableRow)`
  && {
    background-color: var(--black);

    & > th {
      color: var(--white);
      padding: 1.5em 0em;
    }
  }
`;

const StyledPageOption = styled(StyledOption)`
  font-size: 1.25rem;
  &:hover {
    transform scale(1.03);
  }
  &:active {
    transform scale(.98)
  }
  &:disabled {
    color: var(--black);
    font-weight: bold;
    cursor: not-allowed;
  }

  @media (max-width: 500px) {
    font-size: .75rem;
  }
`;

const StyledStandingsHeader = styled(StyledHeader)`
  padding-top: 2em;
`;

const StyledPageTeamCell = styled(StyledPageTableCell)`
  background: var(--darkgrey);
`;

const StyledSmallIcon = styled.img`
  && {
    height: 1em;
    width: 1em;
  }
`;

const StyledLegendWrapper = styled.div`
  && {
    margin: 5em 0em;
  }
`;

const StyledLegend = styled.ul`
  && {
    column-count: 3;
    column-gap: 3em;
    padding: 2em;

    & > li {
      list-style-type: none;
      margin-bottom: 1em;
    }

    @media (max-width: 550px) {
      padding: 1em;
      column-gap: 2em;
    }
  }
`;

const StyledRules = styled.ol`
  && {
    padding: 2em;

    & > li {
      font-size: 1.1em;
      margin-bottom: 2em;
      list-style-type: normal;
      padding-left: 1em;
    }
  }
`;

const StyledBoldWrapper = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`;

const StyledStickyOptionContainer = styled(StyledOptionContainer)`
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 1;
  transform: translateY(-40%);
  padding: 2em;
`;

export {
  GlobalStyle,
  StyledOptionContainer,
  StyledOption,
  StyledHeadlineWrapper,
  StyledTableCell,
  StyledTableHeader,
  StyledTableContainer,
  StyledFlexCell,
  StyledHeader,
  StyledPageHeader,
  StyledPageWrapper,
  StyledPageContentWrapper,
  StyledPageTableCell,
  StyledPageTable,
  StyledPageTableHeader,
  StyledPageTableHead,
  StyledPageOption,
  StyledStandingsHeader,
  StyledPageTeamCell,
  StyledSmallIcon,
  StyledLegend,
  StyledBoldWrapper,
  StyledLegendWrapper,
  StyledRules,
  StyledStickyOptionContainer,
};
