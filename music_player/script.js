const progress = document.getElementById('progress');
const song = document.getElementById('song');
const ctrlIcon = document.getElementById('ctrlIcon');

song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

const playPause = () => {
    if (ctrlIcon.classList.contains("fa-circle-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-circle-pause");
        ctrlIcon.classList.add("fa-circle-play");
        ctrlIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");
        ctrlIcon.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
    }
}

setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

progress.onchange = function () {
    song.play();
    ctrlIcon.classList.remove("fa-circle-play");
    ctrlIcon.classList.add("fa-circle-pause");
    ctrlIcon.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
    song.currentTime = progress.value;
}
