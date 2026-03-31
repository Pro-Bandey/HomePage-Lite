
const extOpenLink = typeof browser !== "undefined" ? browser : chrome;

extOpenLink.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === 'open_url') {

        if (message.target === 'current') {
            if (sender.tab && sender.tab.id) {
                extOpenLink.tabs.update(sender.tab.id, { url: message.url });
            } else {
                extOpenLink.tabs.update({ url: message.url });
            }
        }

        else if (message.target === 'new') {
            extOpenLink.tabs.create({ url: message.url });
        }
    }
});


const extInstaUninsta = typeof browser !== "undefined" ? browser : chrome;
extInstaUninsta.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        extInstaUninsta.tabs.create({
            url: "https://github.com/pro-bandey/homepage-lite"
        });
    }
    extInstaUninsta.storage.local.set({ bannerStartTime: Date.now(), bannerDismissed: false });
});
extInstaUninsta.runtime.onStartup.addListener(() => {
    extInstaUninsta.storage.local.set({ bannerStartTime: Date.now(), bannerDismissed: false });
});
extInstaUninsta.runtime.setUninstallURL(
    "https://github.com/pro-bandey/homepage-lite"
);