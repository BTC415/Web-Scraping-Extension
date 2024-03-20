
## Install

[![Chrome][Chrome-image]][Chrome-url]

[Chrome-image]: https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white
[Chrome-url]: https://chromewebstore.google.com/detail/nextscraper/kjlhnflincmlpkgahnidgebbngieobod

## Features

- **Scrape Data from React/Next.js Sites:** Extract information from dynamic web applications instantly. Analyze and explore it right in NextScraper.
- **Export Data:** Export data from Next.js, React, and Redux sites with ease. Download JSON files in one click.
- **Code Snippet Generator:** Save time by letting NextScraper create fast code snippets that allow you to scrape data _**without**_ loading a headless browser.

## Privacy

No data leaves your browser. Ever. This extension does not collect any analytics and the [source code is openly available on Github](https://github.com/BTC415/Web-Scraping-Extension). Feel free to build it yourself with the instructions below for your peace of mind.

Read the full [Privacy Policy](/PrivacyPolicy.md) here.

## Building Locally

1. Install Node.js >= 14.18.0. Ideally use the latest LTS version.
2. Clone the Github repository.
3. Switch to the `publish` branch for the latest release.
4. Install dependencies and build:
    ```bash
    npm ci
    npm run build
    ```
5. Visit `chrome://extensions` in Google Chrome.
5. Enable developer mode and select `Load Unpacked`
6. Select the build folder that was created in the project directory.
7. The extension is now installed.

## Development

### Getting Started

1. Install Node.js >= 14.18.0. Ideally use the latest LTS version.
2. Fork or clone the repo.
3. In the project folder:
    ```bash
    npm ci
    npm run dev
    ```
    This should create a `build` folder in the project directory.

4. Visit `chrome://extensions` in Google Chrome.
5. Enable developer mode and select `Load Unpacked`
6. Select the build folder that was created.
7. Vite should live-reload any changes as you make them!

### Adding a Feature
The ideal workflow looks something like this.

1. Fork the repository on GitHub.
2. Create a new branch describing the feature you'll work on.
3. Open a pull request to merge your branch with `main`.
4. Await/request review.
5. Your changes will be merged when approved.
