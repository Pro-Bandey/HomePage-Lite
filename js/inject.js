// This runs in the dashboard's "Main World"
(function() {
    const dashboardHost = "online-homepage-pro.vercel.app";
    const originalOpen = window.open;

    window.open = function(url, target, features) {
        if (url) {
            try {
                const urlObj = new URL(url, window.location.origin);
                // If it's NOT our dashboard, tell the extension to handle it
                if (urlObj.hostname !== dashboardHost && urlObj.hostname !== "localhost") {
                    window.dispatchEvent(new CustomEvent('EXT_EXTERNAL_NAV', { detail: url }));
                    return null; // Stop the iframe from opening it
                }
            } catch (e) {
                console.error("Link capture error:", e);
            }
        }
        return originalOpen.apply(this, arguments);
    };
})();