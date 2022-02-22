import * as React from "react"
import Link from "../components/Link"
import { useTheme, ThemeProvider, ThemeEnum } from "./ThemeProvider"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyles"
//@ts-ignore
import Logo from "../../static/logo.svg"

const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <>
      <GlobalStyle theme={theme} />
      <Link onClick={toggleTheme}>
        Read in the {theme === ThemeEnum.LIGHT ? "dark" : "light"}
      </Link>
    </>
  )
}

const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5625rem rgb(0 0 0 / 8%);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  padding: 20px 150px 20px 150px;
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
`

const SpanWithMargin = styled.span`
  margin-top: 5px;
`

const Layout = ({ location, title, children }) => {
  //@ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider>
      <StyledHeader className="global-header">
        <HeaderLink to="/">
          <StyledLogo />
          <SpanWithMargin>{title}</SpanWithMargin>
        </HeaderLink>
        <div style={{ width: "100%" }}></div>
        <ThemeButton />
      </StyledHeader>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Illanor Music Blog</footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
