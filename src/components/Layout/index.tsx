import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from '../../Theme/theme';
import { Container, Content } from './styles'

type LayoutProps = {
  children: React.ReactNode,
};

export function Layout ({children} :LayoutProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
    </ThemeProvider>
  )
}
