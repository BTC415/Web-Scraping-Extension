import { useState, useEffect, useRef } from 'react'

import './Popup.css'

export const Popup = () => {
  const [scrapedData, setScrapedData] = useState({
    data: '{}',
    url: '',
    breadcrumbs: [],
    stateType: '',
  })
  const jsonRef = useRef(null)

  const scrapeData = async () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { text: 'retreive_dom' }, (res) => {
        const cleanUrl = removeFluff(tab.url)
        setScrapedData({
          ...res,
          url: cleanUrl,
          breadcrumbs: cleanUrl
            .split('/')
            .filter((segment) => segment.trim() !== '')
            .map((segment) => {
              return (
                <li>
                  <a className="link" href={cleanUrl}>
                    {segment}
                  </a>
                </li>
              )
            }),
        })
      })
    })
  }

  const removeFluff = (url) => {
    for (const pre of ['https://', 'http://']) {
      if (url.startsWith(pre)) {
        url = url.slice(pre.length)
        break
      }
    }
    if (url.startsWith('www.')) url = url.slice(4)
    return url
  }

  const exportToFile = () => {}
  const showCodeSnippets = () => {}
  const copyToClipboard = () => {}

  useEffect(() => {
    scrapeData()
  }, [])

  useEffect(() => {
    if (scrapedData.data) jsonRef.current.value = scrapedData.data
  }, [scrapedData])

  return (
    <div className="container-lg m-2">
      <div className="m-2">
        {scrapedData.breadcrumbs && (
          <div className="text-xs breadcrumbs overflow-hidden">
            <ul>{scrapedData.breadcrumbs}</ul>
          </div>
        )}
      </div>
      <label className="form-control m-2">
        <textarea
          className="textarea textarea-bordered min-h-40"
          placeholder="Bio"
          ref={jsonRef}
        ></textarea>
        <div className="label">
          <span className="label-text-alt">
            {scrapedData.stateType === ''
              ? 'Page does not use React or Next.js'
              : `Data scraped from ${scrapedData.stateType} state`}
            .
          </span>
        </div>
      </label>
      <div className="container">
        <button onClick={copyToClipboard} className="btn btn-md btn-outline btn-primary">
          Copy to Clipboard
        </button>
        <button onClick={exportToFile} className="btn btn-md btn-outline btn-secondary">
          Export to File
        </button>
        <button onClick={showCodeSnippets} className="btn btn-md btn-outline btn-accent">
          Code Snippets
        </button>
      </div>
    </div>
  )
}

export default Popup
