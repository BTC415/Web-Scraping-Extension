import { createContext, useState } from 'react'

export const ClipboardContext = createContext()

export const ClipboardProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false)

  const copyToClipboard = (text) => {
    setShowToast(true)
    if ('clipboard' in navigator) navigator.clipboard.writeText(text)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <ClipboardContext.Provider
      value={{ copyToClipboard: copyToClipboard, showToast: showToast, setShowToast: setShowToast }}
    >
      {children}
    </ClipboardContext.Provider>
  )
}
