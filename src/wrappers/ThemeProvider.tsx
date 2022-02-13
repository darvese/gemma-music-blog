import React, { createContext, useContext, useEffect, useState } from "react"

const STORAGE_KEY = "theme"

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface IThemeContext {
  toggleTheme: () => void
  theme: ThemeEnum
}

const ThemeContext = createContext<IThemeContext>({
  theme: ThemeEnum.DARK,
  toggleTheme: undefined,
})

interface IThemeProvider {}

export const useTheme = () => useContext<IThemeContext>(ThemeContext)

const getUntoggledTheme = (theme: ThemeEnum) => {
  return theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
}

const isBrowser = typeof window !== "undefined"

export const ThemeProvider: React.FunctionComponent<IThemeProvider> = ({
  children,
}) => {
  const [theme, setTheme] = useState(() => {
    if (isBrowser) {
      const storedTheme = window.localStorage.getItem(STORAGE_KEY)
      return (storedTheme as ThemeEnum) || ThemeEnum.DARK
    }
    return ThemeEnum.DARK
  })

  const toggleTheme = () => setTheme(getUntoggledTheme(theme))

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem(STORAGE_KEY, theme)
      document.documentElement.classList.add(theme)
      document.documentElement.classList.remove(getUntoggledTheme(theme))
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
