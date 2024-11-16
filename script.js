// Play/Pause functionality
let audio = document.getElementById('bg-audio');
let playPauseButton = document.querySelector('.play-pause-btn');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "❚❚";  // Change to pause icon
    } else {
        audio.pause();
        playPauseButton.textContent = "▶️";  // Change to play icon
    }
}

// Mute/Unmute functionality
let muteButton = document.querySelector('.mute-unmute-btn');
let muteIcon = document.getElementById('mute-icon');

function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
        muteIcon.textContent = "🔊"; // Unmuted icon
    } else {
        audio.muted = true;
        muteIcon.textContent = "🔇"; // Muted icon
    }
}
