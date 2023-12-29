console.info('contentScript is running')

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === 'retreive_dom') {
    // Search for NextJS state object
    let jsonString = document.querySelector('script#__NEXT_DATA__')?.text
    let stateType = jsonString ? 'Next.js' : ''
    if (!jsonString) {
      // If NextJS data is not found, search for React data
      jsonString = document.querySelector('script[data-name=query]')
      if (jsonString) {
        jsonString = jsonString.text.split('=')[1].trim().replace(/;+$/, '')
        stateType = 'React'
      }
    }
    let data = jsonString ? JSON.parse(jsonString) : {}
    sendResponse({
      jsonString: jsonString ? JSON.stringify(data, null, 2) : '{}',
      data: data,
      stateType: stateType,
    })
  }
})
