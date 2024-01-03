import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json' assert { type: 'json' }

export default defineManifest({
  name: packageData.displayName,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/logo16.png',
    32: 'img/logo32.png',
    48: 'img/logo48.png',
    128: 'img/logo128.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/logo48.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/scripts/content.js'],
    },
  ],
  permissions: ['activeTab', 'storage', 'scripting'],
})
