import { styled } from "styled-components";

export const PaginationWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 24px;
`

export const PaginationContent = styled.nav`
  display: flex;
  width: fit-content;
  height: 48px;
  border-radius: 20px;
  background: linear-gradient(270deg, #00263B 0%, #3A0344 100%), linear-gradient(90deg, #FA75FD 0%, #3093FF 100%);

  img {
    width: 24px;
    height: 24px;
  }
`

export const PageLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3093FF;
  background: transparent;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  cursor: pointer; 
  width: 36px;

  &:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 48px;
  };

  &:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 48px;
  };

  &:not(:first-child) {
    margin-left: -1px;
  };
  
  &:hover,
  &:focus {
    background: linear-gradient(180deg, #FA75FD 0%, #3093FF 100%);
    z-index: 2;
  };

  &:focus {
    z-index: 3;
  };
`

export const PageLinkActive = styled(PageLink)`
  background: linear-gradient(180deg, #FA75FD 0%, #3093FF 100%);
  z-index: 2;
`

export const PageLinkDisabled = styled(PageLink)`
  color: #6c757d;
  pointer-events: none;
`
