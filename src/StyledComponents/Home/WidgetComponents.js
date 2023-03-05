import styled from "styled-components";

const StyledWidgetContainer = styled.div`
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-flow: row;
    gap: 3em;
`;

export { StyledWidgetContainer };