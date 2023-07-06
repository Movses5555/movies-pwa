import styled, { keyframes } from "styled-components";

export const SpinnerWrapper = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContent = styled.div`
  height: 4rem;
  width: 4rem;
  border: 4px solid #d1d5db;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: ${spinnerAnimation} 800ms linear infinite;
`;
