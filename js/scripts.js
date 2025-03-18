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

    // Play background music on any user interaction
    let hasPlayedMusic = false;
    const audio = document.getElementById('background-music');

    function playMusic() {
        if (!hasPlayedMusic) {
            audio.play()
                .then(() => {
                    hasPlayedMusic = true;
                })
                .catch(function(error) {
                    console.log("Audio playback failed:", error);
                });
        }
    }

    // Listen for various user interactions
    document.addEventListener('click', playMusic, { once: true });
    document.addEventListener('touchstart', playMusic, { once: true });
    document.addEventListener('scroll', playMusic, { once: true });
    document.addEventListener('keypress', playMusic, { once: true });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe all elements that should animate
    const elements = document.querySelectorAll('.intro-image, .location-image, .gifts-images, .gift-image');
    elements.forEach(element => observer.observe(element));
});