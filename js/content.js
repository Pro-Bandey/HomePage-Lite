const extOpenLinkAndfetchData = typeof browser !== "undefined" ? browser : chrome;

// --- Metadata Syncing ---
function sendLiveMetadata() {
    const liveTitle = document.title;
    const iconNode = document.querySelector("link[rel~='icon']");
    const liveFavicon = iconNode ? iconNode.href : "";

    extOpenLinkAndfetchData.runtime.sendMessage({
        action: "sync_metadata",
        title: liveTitle,
        favicon: liveFavicon
    });
}
sendLiveMetadata();
setInterval(sendLiveMetadata, 1000);

// --- Link Click Handling ---
document.addEventListener('click', function (e) {
    const link = e.target.closest('a');

    if (link && link.href) {
        // Ignore empty links or javascript actions
        if (link.href.startsWith('javascript:')) return;

        // If it's the New Tab page -> Open in CURRENT tab
        if (window.name === 'newtab_frame') {
            e.preventDefault();   // Stop the website from loading inside the iframe
            e.stopPropagation();  // Stop React/Next.js routers from catching the click

            extOpenLinkAndfetchData.runtime.sendMessage({
                action: 'open_url',
                url: link.href,
                target: 'current'
            });
        }
        // If it's the Sidebar -> Open in NEW tab
        else if (window.name === 'sidebar_frame') {
            e.preventDefault();
            e.stopPropagation();

            extOpenLinkAndfetchData.runtime.sendMessage({
                action: 'open_url',
                url: link.href,
                target: 'new'
            });
        }
    }
}, true); // <-- 'true' is critical here! It intercepts the click in the Capture Phase.