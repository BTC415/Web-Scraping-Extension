import { useContext } from 'react'

import './Popup.css'
import { PageProps } from './PageProps'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { PageData } from './PageData'
import { PageDataContext } from './PageDataProvider'
import { ThemeContext } from './ThemeProvider'

export const Popup = () => {
  const { loading, pageDisabled } = useContext(PageDataContext)
  const { themeLoading } = useContext(ThemeContext)
  if (loading || themeLoading) return <div className="skeleton w-full h-full"></div>

  return (
    <>
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
