var audio = document.getElementById("bgm");
audio.volume = 0.2;

function playAudio() {
    audio.play();
}
function pauseAudio() {
    audio.pause();
}
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}