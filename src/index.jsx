import React from 'react'
import ReactDOM from 'react-dom/client'
import { Popup } from './Popup'
import { PageDataProvider } from './contexts/PageDataProvider'
import { ThemeProvider } from './contexts/ThemeProvider'
import { ClipboardProvider } from './contexts/ClipboardProvider'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ClipboardProvider>
        <PageDataProvider>
          <Popup />
        </PageDataProvider>
      </ClipboardProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
