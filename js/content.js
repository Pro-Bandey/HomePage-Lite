const extOpenLinkAndfetchData = typeof browser !== "undefined" ? browser : chrome;
const dashboardHost = "online-homepage-pro.vercel.app";

function sendLiveMetadata() {
    // 1. Get Title
    const liveTitle = document.title;

    const iconNode = document.querySelector("link[rel*='icon']");
    const liveFavicon = iconNode ? iconNode.href : "";

    if (liveTitle) {
        extOpenLinkAndfetchData.runtime.sendMessage({
            action: "sync_metadata",
            title: liveTitle,
            favicon: liveFavicon
        });
    }
}

sendLiveMetadata();
setInterval(sendLiveMetadata, 500);

// --- Redirection Logic (Search & Links) ---
const engines = {
    google: "https://www.google.com/search?q=",
    googleai: "https://www.google.com/search?udm=50&aep=11&q=",
    chatgpt: "https://chatgpt.com/?q={searchTerms}&hints=search",
    startpage: "https://www.startpage.com/sp/search?query=",
    brave: "https://search.brave.com/search?q=",
    brave: "https://search.brave.com/search?q=",
    ecosia: "https://www.ecosia.org/search?&q=",
    googleai: "https://www.google.com/search?udm=50&aep=11&q=",
    bing: "https://www.bing.com/search?q=",
    copilot: "https://copilot.microsoft.com/?q=",
    duckduckgo: "https://duckduckgo.com/?q=",
    youtube: "https://www.youtube.com/results?search_query=",
    github: "https://github.com/search?q=",
    wikipedia: "https://en.wikipedia.org/wiki/"
};

function triggerRedirection(url) {
    const targetType = (window.name === 'sidebar_frame') ? 'new' : 'current';
    extOpenLinkAndfetchData.runtime.sendMessage({
        action: 'open_url',
        url: url,
        target: targetType
    });
}

document.addEventListener('click', (e) => {
    // A. Intercept standard <a> links
    const link = e.target.closest('a');
    if (link && link.href) {
        try {
            const url = new URL(link.href);
            if (url.hostname !== dashboardHost && url.hostname !== "localhost") {
                e.preventDefault();
                e.stopImmediatePropagation();
                triggerRedirection(link.href);
            }
        } catch (err) { }
    }

    // B. Intercept Search Engine Icon Clicks
    const icon = e.target.closest('.engineIcon');
    if (icon && icon.dataset.engine) {
        const input = document.getElementById('SearchInputBar');
        if (input && input.value.trim()) {
            e.preventDefault();
            e.stopImmediatePropagation();
            const query = encodeURIComponent(input.value.trim()).replace(/%20/g, "+");
            const searchUrl = (engines[icon.dataset.engine] || engines.google) + query;
            triggerRedirection(searchUrl);
        }
    }
}, true);

document.addEventListener('keydown', (e) => {
    const input = e.target.closest('#SearchInputBar');
    if (input && e.key === 'Enter') {
        const val = input.value.trim();
        if (val) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const urlPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
            if (urlPattern.test(val.replace(/\s+/g, ''))) {
                triggerRedirection('https://' + val.replace(/\s+/g, ''));
            } else {
                const selectedEngineEl = document.querySelector('.engineIcon.selected');
                const engineKey = selectedEngineEl ? selectedEngineEl.dataset.engine : 'google';
                const searchUrl = (engines[engineKey] || engines.google) + encodeURIComponent(val).replace(/%20/g, "+");
                triggerRedirection(searchUrl);
            }
        }
    }
}, true);