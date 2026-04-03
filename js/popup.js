document.getElementById("openSidebar").addEventListener("click", async () => {
    if (typeof browser !== "undefined" && browser.sidebarAction) {
        browser.sidebarAction.open();
    }
    else if (typeof chrome !== "undefined" && chrome.sidePanel) {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (tab) {
                await chrome.sidePanel.open({ windowId: tab.windowId });
            }
        } catch (err) {
            console.error("Failed to open Chrome side panel:", err);
        }
    } else {
        alert("Sidebar functionality is not supported in this browser version.");
    }
});


// FireFox------------------

// const extInstaUninsta = typeof browser !== "undefined" ? browser : chrome;
// document.getElementById("openSidebar").addEventListener("click", async () => {
//     if (extInstaUninsta.sidebarAction && extInstaUninsta.sidebarAction.open) {
//         try {
//             await extInstaUninsta.sidebarAction.open();
//             window.close();
//         } catch (err) {
//             console.error("HomePage Lite: Failed to open Firefox sidebar", err);
//         }
//     }
//     else if (extInstaUninsta.sidePanel) {
//         try {
//             const [tab] = await extInstaUninsta.tabs.query({ active: true, currentWindow: true });
//             if (tab) {
//                 await extInstaUninsta.sidePanel.open({ windowId: tab.windowId });
//                 window.close();
//             }
//         } catch (err) {
//             console.error("HomePage Lite: Failed to open Chrome side panel", err);
//         }
//     } else {
//         alert("Sidebar functionality is not supported in this browser.");
//     }
// });