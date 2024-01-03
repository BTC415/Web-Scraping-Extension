import { useContext } from 'react'
import { ClipboardContext } from '../contexts/ClipboardProvider'

export const ClipboardToast = () => {
  const { showToast } = useContext(ClipboardContext)

  return (
    <div className={'toast toast-top toast-start ' + (showToast ? 'toast-shown' : 'toast-hidden')}>
      <div className="alert alert-success">
        <span>Copied to clipboard!</span>
      </div>
    </div>
  )
}
