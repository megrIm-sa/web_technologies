const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const display = document.getElementById("display");
const cloak = document.getElementById("cloak");
let timerInterval;

startButton.addEventListener("click", function () {
    const duration = parseFloat(durationInput.value);
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    startCountdown(duration);
});

function startCountdown(duration) {
    let startTime = Date.now();
    clearInterval(timerInterval);
    cloak.classList.add("cloak");

    function updateDisplay() {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime) / 1000;
        const remaining = Math.max(duration - elapsed, 0);
        const minutes = Math.floor(remaining / 60);
        const seconds = Math.floor(remaining % 60);
        display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (remaining <= 0) {
            clearInterval(timerInterval);
            display.textContent = "00:00";
            cloak.classList.remove("cloak");
            alert("Timer has expired!");
        }
    }

    updateDisplay();
    timerInterval = setInterval(updateDisplay, 1000);
}