import { useContext } from 'react'
import { PageDataContext } from '../contexts/PageDataProvider'
import { ClipboardContext } from '../contexts/ClipboardProvider'

export const PageProps = () => {
  const { scrapedData } = useContext(PageDataContext)
  const { copyToClipboard } = useContext(ClipboardContext)

  const isNextJs = scrapedData.stateType && scrapedData.stateType === 'Next.js'
  const hasQuery = scrapedData.data && scrapedData.data.query
  const queryStringified = hasQuery ? JSON.stringify(scrapedData.data.query) : ''

  return (
    <div className="overflow-x-auto pb-1">
      <table className="table table-sm">
        <tbody>
          {scrapedData.url && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(scrapedData.url)}
            >
              <th className="border-neutral-content">URL</th>
              <td className="border-neutral-content">{scrapedData.url}</td>
            </tr>
          )}
          {scrapedData.data && scrapedData.data.page && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(scrapedData.data.page)}
            >
              <th className="border-neutral-content">page</th>
              <td className="border-neutral-content">{scrapedData.data.page}</td>
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
          {scrapedData.data && scrapedData.data.assetPrefix && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(scrapedData.data.assetPrefix)}
            >
              <th className="border-neutral-content">assetPrefix</th>
              <td className="border-neutral-content">{scrapedData.data.assetPrefix}</td>
            </tr>
          )}
          {scrapedData.data && scrapedData.data.buildId && isNextJs && (
            <tr
              className="cursor-pointer border-neutral-content"
              onClick={() => copyToClipboard(scrapedData.data.buildId)}
            >
              <th className="border-neutral-content">buildId</th>
              <td className="border-neutral-content">{scrapedData.data.buildId}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
