// navigator.serviceWorker.controller.postMessage({ message: 'Page visited' })

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.type === 'retreive_dom') {
    sendResponse(scrapePageData())
  } else if (request.type === 'update_icon') {
    sendResponse({ pageEnabled: checkForPageData() })
  }
})

const checkForPageData = () =>
  !!(
    document.querySelector('script#__NEXT_DATA__') ||
    document.querySelector('script[data-name=query]') ||
    Array.from(document.getElementsByTagName('script')).find((script) =>
      script.text.includes('window.__PRELOADED_STATE__ = {'),
    )
  )

const scrapePageData = () => {
  // Search for NextJS state object
  let jsonString = document.querySelector('script#__NEXT_DATA__')?.text
  let stateType = jsonString ? 'Next.js' : ''
  if (!jsonString) {
    // If NextJS data is not found, search for React data
    jsonString = document.querySelector('script[data-name=query]')
    if (jsonString) {
      jsonString = jsonString.text.split('=')[1].trim().replace(/;+$/, '')
      stateType = 'React'
    } else {
      // If React data is not found, search for Redux data
      jsonString = Array.from(document.getElementsByTagName('script')).find((script) =>
        script.text.includes('window.__PRELOADED_STATE__ = {'),
      )?.text
      if (jsonString) {
        jsonString = jsonString
          .split('window.__PRELOADED_STATE__ =')[1]
          .split('window.__BUILD_CONTEXT__')[0]
          .trim()
          .replace(/;+$/, '')
        stateType = 'Redux'
      }
    }
  }
  let data = jsonString ? JSON.parse(jsonString) : {}
  return {
    jsonString: jsonString ? JSON.stringify(data, null, 2) : '{}',
    data: data,
    stateType: stateType,
    pageEnabled: stateType !== '',
  }
}

scrapePageData()
