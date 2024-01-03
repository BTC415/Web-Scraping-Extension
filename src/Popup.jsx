import { useContext } from 'react'

import './Popup.css'
import { PageProps } from './components/PageProps'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { PageData } from './components/PageData'
import { PageDataContext } from './contexts/PageDataProvider'
import { ThemeContext } from './contexts/ThemeProvider'
import { Loading } from './components/Loading'
import { ClipboardToast } from './components/ClipboardToast'

export const Popup = () => {
  const { loading, pageDisabled } = useContext(PageDataContext)
  const { themeLoading } = useContext(ThemeContext)

  if (loading || themeLoading) return <Loading />
  else
    return (
      <>
        <ClipboardToast />
        <Navbar />
        {pageDisabled ? (
          <div className="text-center flex flex-col justify-center items-center h-full">
            <h1 className="text-3xl font-bold">No Data 🚫</h1>
            <p className="text-lg">This page does not use React or Next.js.</p>
          </div>
        ) : (
          <>
            <div className="flex-grow flex flex-col overflow-y-auto p-3">
              <PageProps />
              <PageData />
            </div>
            <Footer />
          </>
        )}
      </>
    )
}

export default Popup
