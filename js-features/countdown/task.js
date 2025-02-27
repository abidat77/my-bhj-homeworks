let totalTime = document.getElementById('timer').innerText;
let countdown = setInterval(startTimer, 500);

function startTimer() {
    if(totalTime <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
        autoDownloadEmptyFile();
    }
    else {
        totalTime--;
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    let hours = Math.floor(totalTime / 3600); ;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    let timerDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').innerText = timerDisplay;
}

function autoDownloadEmptyFile() {
    const blob = new Blob(['Урааа, получилось!'], { type: 'text/plain' });//это подглядела:)
    let autoLink = document.createElement('a');
    autoLink.href = URL.createObjectURL(blob);//и это
    autoLink.download = 'empty:(';
    document.body.appendChild(autoLink);
    autoLink.click();
}

startTimer();