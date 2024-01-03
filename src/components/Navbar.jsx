import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider'
import { PageDataContext } from '../contexts/PageDataProvider'

const openLink = (url) => {
  chrome.tabs.create({ url: url })
}

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { scrapedData } = useContext(PageDataContext)

  return (
    <div className="navbar flex-none bg-base-200">
      <div className="navbar-start">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => openLink('https://github.com/peterrauscher/NextScraper')}
        >
          <FontAwesomeIcon className="fa-xl" icon={faGithub} />
        </button>
      </div>
      <div className="navbar-center">
        <p className="text text-lg font-bold">
          {!scrapedData.stateType || scrapedData.stateType === ''
            ? 'NextScraper 🚀'
            : `${scrapedData.stateType} Data Found ✅`}
        </p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'corporate' ? false : true}
            />
            <FontAwesomeIcon className="fa-xl" icon={theme === 'corporate' ? faSun : faMoon} />
          </label>
        </button>
      </div>
    </div>
  )
}
