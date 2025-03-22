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