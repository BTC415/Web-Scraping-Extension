let extensionActive = false
let currentPageData = {}

chrome.webNavigation.onCompleted.addListener(
  () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { type: 'update_icon' }, (res) => {
        if (res) {
          const prefix = res.pageEnabled ? '../../img/icon-success' : '../../img/icon'
          chrome.action.setIcon({
            path: {
              16: prefix + '16.png',
              32: prefix + '32.png',
              48: prefix + '48.png',
              128: prefix + '128.png',
            },
            tabId: tab.id,
          })
        }
      })
    })
  },
  { url: [{ schemes: ['http', 'https'] }] },
)

const updatePopup = () => {
  chrome.action.setPopup({
    popup: extensionActive ? '' : 'popup.html',
    tabId: tab.id,
  })
}
