const extApi0 = typeof browser !== "undefined" ? browser : chrome;

function sendLiveMetadata() {
    // Grab the live, JavaScript-rendered title
    const liveTitle = document.title;
    
    // Grab the live favicon
    const iconNode = document.querySelector("link[rel~='icon']");
    const liveFavicon = iconNode ? iconNode.href : "";

    // Send data to the parent extension page
    extApi0.runtime.sendMessage({
        action: "sync_metadata",
        title: liveTitle,
        favicon: liveFavicon
    });
}

// Send immediately on load
sendLiveMetadata();

// Keep sending the live title and favicon every 1 second (1000ms)
setInterval(sendLiveMetadata, 1000);