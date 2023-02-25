const { default: styled, keyframes } = require('styled-components');

export const Scontainer = styled.div`
  background-color: #ebebeb;

  min-height: 100vh;

  padding: clamp(1rem, 5vw, 5rem) clamp(1rem, 5vw, 5rem) clamp(4rem, 2vw, 5rem)
    clamp(1rem, 5vw, 5rem);

  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
  gap: clamp(1.5rem, 2.5vw, 2.5rem);
`;

const Snav_Animation = keyframes`
  0% {
    width: 0;
  }

  50% {
    width: 100%;
  }

  100%{
    box-shadow: 0 0.5rem 0.75rem 0.25rem #dedede;
  }
`;

export const Snav = styled.main`
  padding: 0.5rem 2rem;
  position: relative;

  border-radius: 3rem;

  display: flex;
  align-items: center;
  background-color: #f0f1f1;

  font-weight: 500;
  color: black;
  font-size: clamp(1rem, 4.75vw, 3rem);

  animation: ${Snav_Animation} 1.5s ease-in forwards;

  div {
    display: flex;
    align-items: center;
    color: ${(props) => (props.isAnimated ? '#2d2d2d' : 'transparent')};
    transition: color 0.5s ease-in;

    &:hover {
      cursor: pointer;
    }
  }
`;
