import { useState, useEffect } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('corporate')
  const [themeLoading, setThemeLoading] = useState(true)

  const toggleTheme = (e) => {
    if (!themeLoading) {
      if (e.target.checked) setTheme('business')
      else setTheme('corporate')
    }
  }

  useEffect(() => {
    if (!themeLoading) {
      chrome.storage.local.set({ theme: theme }).catch((err) => console.error(err))
      document.querySelector('html').setAttribute('data-theme', theme)
    }
  }, [theme, themeLoading])

  useEffect(() => {
    setThemeLoading(true)
    chrome.storage.local.get(['theme']).then((result) => {
      if (result.theme) {
        setTheme(result.theme)
        document.querySelector('html').setAttribute('data-theme', result.theme)
      }
      setThemeLoading(false)
    })
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        themeLoading: themeLoading,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
