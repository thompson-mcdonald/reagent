import styled from "styled-components";

export default styled.main`
  background-color: var(--color-white);
  max-width: 800px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  margin: 0 auto;
  padding: 1rem 1rem 5rem;
  @media screen and (min-width:740px) {
    padding: 2rem 4rem 5rem;
  }
`;
