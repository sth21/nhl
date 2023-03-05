import styled from "styled-components";

const StyledScoreboard = styled.div`
    display: grid;
    grid-template: 1fr / repeat(auto-fit, minmax(200px, 1fr));
    overflow-x: auto;
    grid-auto-flow: column;
`;

const StyledScoreboardGameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    box-sizing: border-box;
    background: var(--white);
    padding: 1em;
    border: 2px solid var(--grey);
    min-width: 200px;
`;

const StyledScoreboardGameBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25em;
`;

const StyledScoreboardInfo = styled.div`
    display: flex;
    font-size: .9rem;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
`;

const StyledScoreboardTeam = styled.div`
    display: flex;
    align-items: center;
    gap: .25em;
`;

const StyledTime = styled.p`
    color: var(--red);
`;

export { StyledScoreboard, StyledScoreboardGameWrapper, StyledScoreboardGameBody, StyledScoreboardInfo, StyledScoreboardTeam, StyledTime };