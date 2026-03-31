const extOpenLinkAndfetchData = typeof browser !== "undefined" ? browser : chrome;

// Listen for the live data sent every second from content.js
extOpenLinkAndfetchData.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sync_metadata") {

        // 1. Sync Title
        if (message.title && document.title !== message.title) {
            document.title = message.title;
        }

        // 2. Sync Favicon
        if (message.favicon) {
            let localIcon = document.querySelector("link[rel~='icon']");
            if (!localIcon) {
                localIcon = document.createElement("link");
                localIcon.rel = "icon";
                document.head.appendChild(localIcon);
            }

            // Update only if changed to prevent flickering
            if (localIcon.href !== message.favicon) {
                localIcon.href = message.favicon;
            }
        }
    }
});