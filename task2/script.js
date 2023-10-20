let startTime;
let interval;
let isRunning = false;
let lapCounter = 1;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - (interval || 0);
        interval = setInterval(updateDisplay, 10);
        document.getElementById("start").textContent = "Pause";
    } else {
        isRunning = false;
        clearInterval(interval);
        document.getElementById("start").textContent = "Resume";
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        document.getElementById("start").textContent = "Start";
    }
}

function resetStopwatch() {
    if (!isRunning) {
        clearInterval(interval);
        document.getElementById("start").textContent = "Start";
        document.getElementById("display").textContent = "00:00:00";
        lapCounter = 1;
        document.getElementById("laps").innerHTML = "";
    }
}

function updateDisplay() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();
    const milliseconds = elapsedTime.getUTCMilliseconds();
    document.getElementById("display").textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds, true)}`;
}

function formatTime(value, isMilliseconds = false) {
    const leadingZero = value < 10 ? "0" : "";
    if (isMilliseconds) {
        return leadingZero + leadingZero + value;
    }
    return leadingZero + value;
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById("display").textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}
