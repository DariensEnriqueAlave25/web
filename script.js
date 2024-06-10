document.getElementById('startButton').addEventListener('click', () => {
    const audio = document.getElementById('backgroundMusic');
    audio.play();

    const timeline = document.getElementById('timeline');
    timeline.classList.remove('hidden');

    const events = document.querySelectorAll('.timeline-event');
    let currentEvent = 0;

    function showNextEvent() {
        if (currentEvent < events.length) {
            events[currentEvent].classList.add('active');
            currentEvent++;
            setTimeout(showNextEvent, 3000); // Mostrar el siguiente evento cada 3 segundos
        }
    }

    showNextEvent();
});
