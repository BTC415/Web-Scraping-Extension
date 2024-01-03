import { useContext } from 'react'
import { PageDataContext } from './PageDataProvider'

export const PageData = () => {
  const { jsonRef, pageDisabled } = useContext(PageDataContext)

  return (
    <textarea
      disabled={pageDisabled}
      className="textarea textarea-bordered text-sm flex-grow bg-base-200 resize-none"
      placeholder="{}"
      ref={jsonRef}
    ></textarea>
  )
}
