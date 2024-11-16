// Modal for legal terms
const termsLink = document.getElementById('terms-link');
const termsModal = document.getElementById('terms-modal');
const closeBtn = document.getElementById('close-btn');

termsLink.onclick = () => {
    termsModal.style.display = 'block';
};

closeBtn.onclick = () => {
    termsModal.style.display = 'none';
};

// Close modal if user clicks outside of it
window.onclick = (event) => {
    if (event.target === termsModal) {
        termsModal.style.display = 'none';
    }
};

// Countdown timer
const timerText = document.getElementById('timer-text');

// Set the end time for the countdown (example: 1 hour from now)
const endTime = new Date().getTime() + 3600 * 1000; // 1 hour in milliseconds

function updateTimer() {
    const currentTime = new Date().getTime();
    const timeLeft = endTime - currentTime;

    if (timeLeft <= 0) {
        timerText.innerHTML = "00:00:00";
        clearInterval(timerInterval); // Stop the timer
    } else {
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        // Format the time as HH:MM:SS
        timerText.innerHTML = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
    }
}

// Add leading zero to single-digit numbers
function padTime(time) {
    return time < 10 ? '0' + time : time;
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();

