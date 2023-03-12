import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  background: var(--black);
  color: var(--white) !important;
  font-size: 0.8rem;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  padding: 2.5em;

  & > img {
    height: 6em;
    width: 6em;
    padding-bottom: 0.75em;
  }
`;

export { StyledFooterWrapper };
