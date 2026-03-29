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

// const extApi1 = typeof browser !== "undefined" ? browser : chrome;
// document.getElementById("openSidebar").addEventListener("click", async () => {
//     if (extApi1.sidebarAction && extApi1.sidebarAction.open) {
//         try {
//             await extApi1.sidebarAction.open();
//             window.close();
//         } catch (err) {
//             console.error("HomePage Lite: Failed to open Firefox sidebar", err);
//         }
//     }
//     else if (extApi1.sidePanel) {
//         try {
//             const [tab] = await extApi1.tabs.query({ active: true, currentWindow: true });
//             if (tab) {
//                 await extApi1.sidePanel.open({ windowId: tab.windowId });
//                 window.close();
//             }
//         } catch (err) {
//             console.error("HomePage Lite: Failed to open Chrome side panel", err);
//         }
//     } else {
//         alert("Sidebar functionality is not supported in this browser.");
//     }
// });