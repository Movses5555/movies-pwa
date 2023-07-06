import styled from 'styled-components'

export const SearchWrapper = styled.div`
  max-width: 512px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    max-width: 100%;
  }
`

export const StyledInput = styled.div`
  img {
    position: absolute;
    left: 4px;
    top: 0;
    padding: 8px;
    fill: black;
    transition: 0.3s;
  }
  input:focus + svg {
    fill: #3093FF;
  }

  &.inputWithIcon {
    position: relative;
  }
`;


export const Input = styled.input`
  height: 40px;
  background: transparent;
  font-size: 16px;
  width: 100%;
  border: 2px solid #3093FF;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  color: #FFFFFF;

  &:focus {
    border-color: #3093FF;
    box-shadow: 0 0 8px 0 #3093FF;
  };
  
  &::placeholder {
    color: #FFFFFF99;
  }
`;
