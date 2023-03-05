import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWidgetContainer = styled.div`
    display: grid;
    padding: 5em;
    grid-template: auto / repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-flow: row;
    gap: 3em;

    & > div {
        background: var(--white);
        padding: 2em;
        box-shadow: 0 2px 3px rgb(0 0 0 / 10%);
    }
`;

const StyledHeadlinesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2em;
`;

const StyledHeader = styled.h4`
    font-weight: bold;
    font-size: 1.1rem;
    width: 100%;
    padding-bottom: 1em;
    border-bottom: 1px solid var(--grey);
`;

const StyledLink = styled(Link)`
    color: inherit;
    font-weight: inherit;
    text-decoration: none;

    &:hover {
    text-decoration: none;
    }

    &:visited {
    text-decoration: none;
    }

    &:active {
    text-decoration: none;
    }
`;

export { StyledWidgetContainer, StyledHeadlinesContainer, StyledHeader, StyledLink };