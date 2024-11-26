window.onload = function () {
    // "Музыка ойнотуу" баскычынын логикасы
    const music = document.getElementById("background-music");
    const playButton = document.getElementById("playButton");

    playButton.style.display = "block"; // Play баскычын көрсөтүү

    playButton.addEventListener("click", function () {
        music
            .play()
            .then(() => {
                playButton.style.display = "none"; // Музыка ойносо, Play баскычын жашыруу
            })
            .catch((error) => {
                console.error("Музыканы ойнотуу мүмкүн болбой жатат:", error);
            });
    });

    // Күндүзгү/түндүк режим
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode")
            ? "Күндүзгү режим"
            : "Түндүк режим";
    });

    // Таймердин логикасы
    const targetDate = new Date("2024-12-31T00:00:00").getTime();
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(
            (distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
        );
        const days = Math.floor(
            (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("years").innerHTML = years;
        document.getElementById("months").innerHTML = months;
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "Убакыт бүттү!";
        }
    }, 1000);

    // Слайд-шоунун логикасы
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider .slide");
    const totalSlides = slides.length;

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });

        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.display = "block";
    }

    setInterval(changeSlide, 5000);
    changeSlide(); // Башында биринчи сүрөттү көрсөтүү
};