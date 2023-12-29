import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const openLink = (url) => {
  chrome.tabs.create({ url: url })
}

export const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <a
          className="btn btn-ghost text-xl font-bold"
          onClick={() => openLink('https://github.com/peterrauscher/NextScraper')}
        >
          Scraper
        </a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <a
          className="btn btn-ghost btn-circle"
          onClick={() => openLink('https://github.com/peterrauscher/NextScraper')}
        >
          <FontAwesomeIcon className="fa-2xl" icon={faGithub} />
        </a>
      </div>
    </div>
  )
}
