const { default: styled } = require('styled-components');

export const Scontainer = styled.div`
  background-color: #ebebeb;

  min-height: 100vh;

  padding: 4rem clamp(1rem, 5vw, 5rem) clamp(5rem, 5vw, 5rem)
    clamp(1rem, 5vw, 5rem);

  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
  gap: clamp(1.5rem, 2.5vw, 2.5rem);
`;

export const Snav = styled.main`
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  background-color: #faf8ff;

  font-weight: 500;
  color: black;
  font-size: clamp(1rem, 4.75vw, 3rem);
`;
