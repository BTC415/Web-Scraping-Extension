import { useState, useEffect, useRef } from 'react'

import './Popup.css'
import { PageProps } from './PageProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faFileExport, faCode } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from './Navbar'

export const Popup = () => {
  const [scrapedData, setScrapedData] = useState({
    url: '',
    stateType: '',
    jsonString: '{}',
    data: {},
  })
  const [loading, setLoading] = useState(true)
  const jsonRef = useRef(null)

  const scrapeData = async () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
      setLoading(true)
      chrome.tabs.sendMessage(tab.id, { text: 'retreive_dom' }, (res) => {
        setScrapedData({
          url: tab.url,
          ...res,
        })
        setLoading(false)
      })
    })
  }

  const exportToFile = () => {
    if (scrapedData.jsonString === '{}') return
    const blob = new Blob([scrapedData.jsonString], { type: 'application/json' })
    const a = document.createElement('a')
    const url = URL.createObjectURL(blob)
    a.href = url
    a.download = `${scrapedData.stateType
      .toLowerCase()
      .replace('.', '')}_page_data_${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const showCodeSnippets = () => {}

  const copyToClipboard = () => {
    if (jsonRef.current && 'clipboard' in navigator)
      navigator.clipboard.writeText(jsonRef.current.textContent)
  }

  useEffect(() => {
    scrapeData()
  }, [])

  useEffect(() => {
    if (jsonRef.current && scrapedData.jsonString)
      jsonRef.current.textContent = scrapedData.jsonString
  }, [scrapedData])

  if (loading) return <div className="skeleton w-full h-full"></div>

  return (
    <>
      <Navbar />
      <div className="popup-body p-3">
        {scrapedData.stateType === 'Next.js' ? (
          <PageProps
            url={scrapedData.url}
            page={scrapedData.data.page}
            query={JSON.stringify(scrapedData.data.query)}
            assetPrefix={scrapedData.data.assetPrefix}
            buildId={scrapedData.data.buildId}
          />
        ) : (
          <PageProps url={scrapedData.url} />
        )}
        <label className="form-control">
          <textarea
            disabled={scrapedData.jsonString === '{}'}
            className="textarea textarea-bordered text-sm min-h-56 resize-none [&::-webkit-scrollbar]:hidden"
            placeholder="{}"
            ref={jsonRef}
          ></textarea>
          <div className="label">
            <span className="label-text-alt mb-2">
              {!scrapedData.stateType || scrapedData.stateType === ''
                ? 'This page does not use React or Next.js'
                : `Data scraped from ${scrapedData.stateType} state`}
              .
            </span>
          </div>
        </label>
      </div>
      <footer className="footer p-3 bg-base-300 fixed bottom-0">
        <div className="grid grid-cols-3 gap-3 w-full h-full">
          <button onClick={copyToClipboard} className="btn btn-md btn-outline btn-primary w-full">
            <FontAwesomeIcon icon={faCopy} /> Copy
          </button>
          <button onClick={exportToFile} className="btn btn-md btn-outline btn-secondary w-full">
            <FontAwesomeIcon icon={faFileExport} /> Export
          </button>
          <button onClick={showCodeSnippets} className="btn btn-md btn-outline btn-accent w-full">
            <FontAwesomeIcon icon={faCode} /> Snippets
          </button>
        </div>
      </footer>
    </>
  )
}

export default Popup
