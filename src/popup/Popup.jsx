import { useState, useEffect, useRef } from 'react'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'

import './Popup.css'

hljs.registerLanguage('json', json)

export const Popup = () => {
  const [scrapedData, setScrapedData] = useState('')
  const jsonRef = useRef(null)

  const scrapeData = async () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { text: 'retreive_dom' }, (domContent) => {
        setScrapedData(domContent === '' ? '' : domContent)
      })
    })
  }

  const exportToFile = () => {}
  const showCodeSnippets = () => {}
  const copyToClipboard = () => {}

  useEffect(() => {
    scrapeData()
  }, [])

  useEffect(() => {
    if (jsonRef && jsonRef.current) hljs.highlightElement(jsonRef.current)
  }, [scrapedData])

  return (
    <main>
      {scrapedData ? (
        <div className="mockup-code">
          <pre ref={jsonRef}>
            <code>{scrapedData}</code>
          </pre>
        </div>
      ) : (
        <div>No React or Next.js data was found on this page.</div>
      )}
      <div className="btm-nav">
        <button onClick={exportToFile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Export</span>
        </button>
        <button className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="btm-nav-label">Copy</span>
        </button>
        <button onClick={showCodeSnippets}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Snippets</span>
        </button>
      </div>
    </main>
  )
}

export default Popup
