import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PageProps = ({ url = '', page = '', query = '', assetPrefix = '', buildId = '' }) => {
  const copyToClipboard = (text) => {
    if ('clipboard' in navigator) navigator.clipboard.writeText(text)
  }

  return (
    <div className="overflow-x-auto mb-2">
      <table className="table table-sm">
        <tbody>
          {url && (
            <tr className="cursor-pointer" onClick={() => copyToClipboard(url)}>
              <th>URL</th>
              <td>{url}</td>
            </tr>
          )}
          {page && (
            <tr className="cursor-pointer" onClick={() => copyToClipboard(page)}>
              <th>page</th>
              <td>{page}</td>
            </tr>
          )}
          {query && (
            <tr className="cursor-pointer" onClick={() => copyToClipboard(query)}>
              <th>query</th>
              <td>{query}</td>
            </tr>
          )}
          {assetPrefix && (
            <tr className="cursor-pointer" onClick={() => copyToClipboard(assetPrefix)}>
              <th>assetPrefix</th>
              <td>{assetPrefix}</td>
            </tr>
          )}
          {buildId && (
            <tr className="cursor-pointer" onClick={() => copyToClipboard(buildId)}>
              <th>buildId</th>
              <td>{buildId}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
