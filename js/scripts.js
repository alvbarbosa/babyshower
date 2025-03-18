document.addEventListener('DOMContentLoaded', function() {
    const countDownDate = new Date("Apr 5, 2025 16:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown-container").innerHTML = "¡El evento ha comenzado!";
        }
    }, 1000);

    // Play background music on user interaction
    document.body.addEventListener('click', function() {
        var audio = document.getElementById('background-music');
        audio.play();
    });
});