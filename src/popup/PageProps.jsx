import { useContext } from 'react'
import { PageDataContext } from './PageDataProvider'

export const PageProps = () => {
  const pageData = useContext(PageDataContext)
  const copyToClipboard = (text) => {
    if ('clipboard' in navigator) navigator.clipboard.writeText(text)
  }

  const isNextJs = pageData.scrapedData.stateType && pageData.scrapedData.stateType === 'Next.js'
  const hasQuery = pageData.scrapedData.data && pageData.scrapedData.data.query
  const queryStringified = hasQuery ? JSON.stringify(pageData.scrapedData.data.query) : ''

  return (
    <div className="overflow-x-auto pb-1">
      <table className="table table-sm">
        <tbody>
          {pageData.scrapedData.url && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(pageData.scrapedData.url)}
            >
              <th className="border-neutral-content">URL</th>
              <td className="border-neutral-content">{pageData.scrapedData.url}</td>
            </tr>
          )}
          {pageData.scrapedData.data && pageData.scrapedData.data.page && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(pageData.scrapedData.data.page)}
            >
              <th className="border-neutral-content">page</th>
              <td className="border-neutral-content">{pageData.scrapedData.data.page}</td>
            </tr>
          )}
          {hasQuery && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(queryStringified)}
            >
              <th className="border-neutral-content">query</th>
              <td className="border-neutral-content">{queryStringified}</td>
            </tr>
          )}
          {pageData.scrapedData.data && pageData.scrapedData.data.assetPrefix && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(pageData.scrapedData.data.assetPrefix)}
            >
              <th className="border-neutral-content">assetPrefix</th>
              <td className="border-neutral-content">{pageData.scrapedData.data.assetPrefix}</td>
            </tr>
          )}
          {pageData.scrapedData.data && pageData.scrapedData.data.buildId && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(pageData.scrapedData.data.buildId)}
            >
              <th className="border-neutral-content">buildId</th>
              <td className="border-neutral-content">{pageData.scrapedData.data.buildId}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
