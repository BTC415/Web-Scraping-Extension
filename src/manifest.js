import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json' assert { type: 'json' }

export default defineManifest({
  name: packageData.displayName,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/icon16.png',
    32: 'img/icon32.png',
    48: 'img/icon48.png',
    128: 'img/icon128.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/icon48.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/scripts/content.js'],
    },
  ],
  background: {
    service_worker: 'src/scripts/background.js',
  },
  permissions: ['activeTab', 'storage', 'webNavigation'],
})
