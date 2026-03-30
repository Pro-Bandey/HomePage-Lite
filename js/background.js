// const ext = typeof browser !== "undefined" ? browser : chrome;

// ext.runtime.onInstalled.addListener((details) => {
//     if (details.reason === "install") {
//         ext.tabs.create({
//             url: "https://github.com/pro-bandey/homepage-lite"
//         });
//     }
//     ext.storage.local.set({ bannerStartTime: Date.now(), bannerDismissed: false });
// });

// ext.runtime.onStartup.addListener(() => {
//     ext.storage.local.set({ bannerStartTime: Date.now(), bannerDismissed: false });
// });

// ext.runtime.setUninstallURL(
//     "https://github.com/pro-bandey/homepage-lite"
// );


// FireFoxe--------------


// const extApi1 = typeof browser !== "undefined" ? browser : chrome;
// extApi1.runtime.onInstalled.addListener((details) => {
//     if (details.reason === "install") {
//         extApi1.tabs.create({
//             url: "https://github.com/pro-bandey/homepage-lite"
//         });
//     }
//     extApi1.storage.local.set({ bannerStartTime: Date.now(), bannerDismissed: false });
// });
// extApi1.runtime.onStartup.addListener(() => {
//     extApi1.storage.local.set({ bannerStartTime: Date.now(), bannerDismissed: false });
// });
// extApi1.runtime.setUninstallURL(
//     "https://github.com/pro-bandey/homepage-lite"
// );