//your JS code here. If required.
function updateTimer() {
    const timer = document.getElementById("timer");

    const now = new Date();

    timer.textContent = now.toLocaleString();
}

// Display immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);