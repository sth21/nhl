import styled, { createGlobalStyle } from "styled-components";
import { TableCell, TableContainer } from "@mui/material";

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
        height: 2em;
        width: 2em;
    }

    :root {
        font-size: 14px;
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Sintony', sans-serif;
        --grey: #ECECEC;
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
`;

const StyledOption = styled.button`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")} !important;
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
`;

const StyledTableCell = styled(TableCell)`
  text-align: center !important;
  padding: 0.625em !important;
  font: inherit !important;
  font-size: 0.9rem !important;
  border-bottom: 1px solid var(--grey) !important;
`;

const StyledTableHeader = styled(StyledTableCell)`
  font-weight: bold !important;
  font-size: inherit;
`;

const StyledTableContainer = styled(TableContainer)`
  padding: 1em 0em;
`;

export {
  GlobalStyle,
  StyledOptionContainer,
  StyledOption,
  StyledHeadlineWrapper,
  StyledTableCell,
  StyledTableHeader,
  StyledTableContainer,
};
