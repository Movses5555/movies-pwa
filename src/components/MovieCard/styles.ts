
import { styled } from "styled-components";

export const Card = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: #000133;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px 0px #002C44;
  background: linear-gradient(90deg, rgba(0, 44, 68, 0.5) 0%, rgba(10, 0, 11, 0.5) 100%);

  img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  };

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: calc(50% - 8px);
    margin-bottom: 24px;
    
    img {
      height: 350px;
    };
  }

  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: calc(33% - 8px);
    margin-bottom: 24px;
    
    img {
      height: 350px;
    };

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(9),
    &:nth-child(10) {
      width: calc(50% - 8px);
    };
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: calc(25% - 12px);
    margin-bottom: 24px;

    img {
      height: 350px;
    };

    &:nth-child(4),
    &:nth-child(9),
    &:nth-child(10) {
      width: calc(25% - 12px);
    };

    &:nth-child(5),
    &:nth-child(6) {
      width: calc(50% - 8px);
    };
  }
`;

export const Info = styled.div`
  height: auto;
  padding: 16px 24px;
  color: #FFFFFF;
  text-align: start;

  p {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 250px;
  }
`;
