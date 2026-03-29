const extApi = typeof browser !== "undefined" ? browser : chrome;
const banner = document.getElementById('welcome-banner');
const closeBtn = document.getElementById('close-banner');

function hideBanner() {
    banner.style.display = 'none';
}

// Close button logic
closeBtn.addEventListener('click', () => {
    hideBanner();
    extApi.storage.local.set({ bannerDismissed: true });
});

// Check storage to see if we should display the banner
extApi.storage.local.get(['bannerStartTime', 'bannerDismissed'], (data) => {
    if (data.bannerDismissed) return;
    
    const now = Date.now();
    const start = data.bannerStartTime || 0;
    const timeElapsed = now - start;
    
    // 60000 ms = 1 minute
    if (timeElapsed < 60000) { 
        banner.style.display = 'flex';
        // Auto-hide the banner after the remaining time finishes
        setTimeout(hideBanner, 300000 - timeElapsed);
    }
});