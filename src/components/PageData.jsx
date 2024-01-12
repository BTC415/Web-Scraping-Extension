import { useContext } from 'react'
import { PageDataContext } from '../contexts/PageDataProvider'

export const PageData = () => {
  const { jsonRef, pageEnabled } = useContext(PageDataContext)

  return (
    <textarea
      disabled={!pageEnabled}
      className="textarea textarea-bordered text-sm flex-grow bg-base-200 resize-none"
      placeholder="{}"
      ref={jsonRef}
    ></textarea>
  )
}
