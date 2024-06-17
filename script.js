document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-button');
    const audioElement = document.getElementById('background-audio');

    homeButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        // Play the audio
        audioElement.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
});
