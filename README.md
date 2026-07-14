# HomePage Lite

**HomePage Lite** is a lightweight, high-performance browser extension that replaces your default new tab page with a custom, beautifully integrated web dashboard via an iframe. It fully supports both **Google Chrome (Manifest V3)** and **Mozilla Firefox (Manifest V2)**.

## ✨ Key Features

- **Custom New Tab Page**: Seamlessly loads `online-homepage-pro.vercel.app` as your default new tab.
- **Live Metadata Syncing**: Injects a content script to dynamically sync the live `<title>` and `favicon` from your dashboard to the browser tab every second (perfect for Single Page Applications).
- **Cross-Browser Sidebar Panel**: Access your dashboard directly from the side of your screen using Chrome's `sidePanel` API or Firefox's `sidebarAction`.
- **Smart Welcome Banner**: Displays a non-intrusive welcome banner on the new tab and sidebar that auto-hides after the first 60 seconds of launching the browser.
- **Modern Popup UI**: A sleek, gradient-styled popup menu with version info, live sync status, and a quick-launch sidebar button.
- **Lifecycle Hooks**: Automatically opens the GitHub repository on a fresh install and redirects for feedback upon uninstallation.

## 🚀 Installation Guide

### Google Chrome, Edge, & Brave

1. Download or clone this repository.
2. Open your browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the root folder of this repository.
5. _(Note: The browser will automatically read the `manifest.json` file)._

### Mozilla Firefox

1. [Download](https://addons.mozilla.org/en-US/firefox/addon/homepage-lite/)

---
