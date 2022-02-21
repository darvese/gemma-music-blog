import * as React from "react"
import Link from "../components/Link"
import { useTheme, ThemeProvider, ThemeEnum } from "./ThemeProvider"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyles"

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
  display: flex;
  gap: 15px;
  padding: 5% 5% 0% 5%;
`

const Layout = ({ location, title, children }) => {
  //@ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
        <ThemeButton />
      </h1>
    )
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <div style={{ width: "100%" }}></div>
        <ThemeButton />
      </>
    )
  }

  return (
    <ThemeProvider>
      <StyledHeader className="global-header">{header}</StyledHeader>
      <div data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Illanor Music Blog</footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
