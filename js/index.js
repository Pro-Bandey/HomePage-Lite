const extIndex = typeof browser !== "undefined" ? browser : chrome;

extIndex.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sync_metadata") {

        if (message.title && document.title !== message.title) {
            document.title = message.title;
        }

        if (message.favicon) {
            let localIcon = document.querySelector("link[rel~='icon']");
            if (!localIcon) {
                localIcon = document.createElement("link");
                localIcon.rel = "icon";
                document.head.appendChild(localIcon);
            }
            if (localIcon.href !== message.favicon) {
                localIcon.href = message.favicon;
            }
        }
    }
});