// Wait for the intro video to end
document.getElementById('intro-video').addEventListener('ended', function() {
    document.getElementById('tap-screen').style.display = 'flex';
});

// Tap to Continue functionality
document.getElementById('tap-screen').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
});

// Full Introduction Button functionality
function startSite() {
    alert('Full Introduction clicked!');
}

// Mute/Unmute Functionality
const video = document.getElementById('overlay-video');
const muteBtn = document.getElementById('mute-btn');

// Ensure video is unmuted by default
video.muted = false;

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;  // Toggle mute
    const icon = muteBtn.querySelector('i');
    if (video.muted) {
        icon.classList.remove('fa-volume-high');
        icon.classList.add('fa-volume-xmark');  // Muted icon
    } else {
        icon.classList.remove('fa-volume-xmark');
        icon.classList.add('fa-volume-high');  // Unmuted icon
    }
});
