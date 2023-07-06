import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #FFFFFF;
  text-align: left;
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    max-height: 70vh;
  }
`
export const ContentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(89.69deg, rgba(0, 31, 49, 0.9) 20.84%, rgba(0, 31, 49, 0) 65.96%);
`

export const Content = styled.div`
  width: 80vw;
  height: auto;

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    display: -webkit-box;
    max-width: 500px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  span {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    margin-left: 32px;

    h2 {
      font-size: 36px;
      font-weight: 700;
      line-height: 56px;
      display: -webkit-box;
      max-width: 90%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  };
`

export const StarAndYear = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`

export const Line = styled.div`
  width: 1px;
  height: 24px;
  background-color: #FFFFFF;
  margin: 0 16px;
`

export const CountryAndGenre = styled.div`
  margin: 32px 0;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin: 24px 0;
  };
`

export const Language = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 48px;
  padding: 0 32px;
  border-radius: 20px;
  background: linear-gradient(90deg, #395D70 99.99%, #3A0344 100%);

  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 36px;
  };
`

export const SubscriptionAndTrailerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 64px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 48px;
  };
`

export const SubscriptionButton = styled.button`
  width: fit-content;
  height: 56px;
  margin-right: 24px;
  margin-bottom: 16px;
  padding: 0 32px;
  border-radius: 20px;
  background: linear-gradient(90deg, #3093FF 0%, #00A4FF 100%);
  box-shadow: 0px 4px 10px 0px #00A4FF;
  color: #FFFFFF;  

  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 48px;
  };
`

export const TrailerButton = styled.button`
  width: fit-content;
  height: 56px;
  border-radius: 20px;
  padding: 0 32px;
  background: linear-gradient(90deg, #00263B 0%, #3A0344 100%), linear-gradient(270deg, #FA75FD 0%, #3093FF 100%);
  border: 2px solid #3093FF;
  color: #FFFFFF;  

  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 48px;
  };
`


export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 56px;
  padding: 0 10vw;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0 32px;
  };

  @media ${({ theme }) => theme.breakpoints.laptop} {
    flex-direction: row;
  }

`
export const InfoLeftContent = styled.div`
  width: calc(50% - 12px);
`
export const InfoRightContent = styled.div`
  width: calc(50% - 12px);

`

export const InfoCard = styled.div`
  margin-bottom: 64px;

  h3 {
    width: fit-content;
    height: 29px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  };

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  };

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }  
`

export const PinkLine = styled.div<{ width?: string }>`
  width: ${props => (props.width ? props.width : "48px")};
  border-radius: 2px;
  background: #FA75FD;
  border: 2px solid #FA75FD;
  margin: 8px 0;
`

export const BlueLine = styled.div<{ width?: string }>`
  width: ${props => (props.width ? props.width : "72px")};
  border-radius: 2px;
  background: linear-gradient(0deg, #00A4FF, #00A4FF), linear-gradient(0deg, #FA75FD, #FA75FD);
  border: 2px solid #00A4FF;
  margin-bottom: 20px;
`

export const SubTitle = styled.div<{margin?: string}>`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #00A4FF;
  margin: ${props => (props.margin ? props.margin : "0")};
`



