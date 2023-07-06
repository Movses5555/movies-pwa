import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px 16px;
  width: 100vw;
  
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 32px 16px;
    width: 100vw;
  };

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding: 44px 0;
    width: 80vw;
  };
`

export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0 32px 0;
  p {
    font-size: 48px;
    font: 700;
    color: #3093FF;
  };

  @media ${({ theme }) => theme.breakpoints.mobile} {
    p {
      font-size: 32px;
      font: 700;
      color: #3093FF;
    };
  }
`

export const SearchWrapper = styled.div`
  max-width: 512px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  margin-top: 48px;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ErrorMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  p {
    color: #FF0000;
  }
`

