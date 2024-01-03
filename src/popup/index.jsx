import React from 'react'
import ReactDOM from 'react-dom/client'
import { Popup } from './Popup'
import { PageDataProvider } from './PageDataProvider'
import { ThemeProvider } from './ThemeProvider'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PageDataProvider>
        <Popup />
      </PageDataProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
