console.info('contentScript is running')

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === 'retreive_dom') {
    // Search for NextJS state object
    let data = document.querySelector('script#__NEXT_DATA__')?.text
    if (!data) {
      // If NextJS data is not found, search for React data
      data = document.querySelector('script[data-name=query]')
      if (data) {
        data = data.text.split('=')[1].trim().replace(/;+$/, '')
      }
    }
    sendResponse(data ? JSON.stringify(JSON.parse(data), null, 2) : '')
  }
})
