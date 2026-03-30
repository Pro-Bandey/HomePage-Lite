// Wait for the DOM to load completely before manipulating it
document.addEventListener('DOMContentLoaded', () => {
  const timeDisplay = document.getElementById('time-display');

  function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
  }

  // Update immediately, then every second
  updateTime();
  setInterval(updateTime, 1000);
});