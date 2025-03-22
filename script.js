// Wait for the intro video to end
document.getElementById('intro-video').addEventListener('ended', function() {
    document.getElementById('tap-screen').style.display = 'flex';
});

// Tap to Continue functionality
document.getElementById('tap-screen').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';

    // Add slide-in effect to buttons
    const buttons = document.querySelector('.buttons');
    buttons.classList.add('visible');

    // Add delay for each button
    const discordButton = document.querySelector('.discord');
    const instagramButton = document.querySelector('.instagram');
    const fullIntroButton = document.querySelector('.full-intro');

    setTimeout(() => {
        discordButton.style.transitionDelay = '0.2s';  /* Faster delay */
        instagramButton.style.transitionDelay = '0.4s';  /* Faster delay */
        fullIntroButton.style.transitionDelay = '0.6s';  /* Faster delay */
    }, 100);
});

// Full Introduction Button functionality
function startSite() {
    alert('Full Introduction clicked!');
}
