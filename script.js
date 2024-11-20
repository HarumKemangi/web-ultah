const music = document.querySelector(".bg");
const button = document.querySelector(".playMusic");
const buttonIMG = document.querySelector(".imgButton");
const confeti = document.querySelector(".dino1");
const card = document.querySelector('.card');
const textMusic = document.querySelector(".text-music");
let isMusic = false;

button.addEventListener('click', () => {
    volume = 0.3
    music.volume = volume;

    textMusic.classList.add("fade")
    setTimeout(() => {
        textMusic.classList.add("trans");
      }, 2000);

    if (isMusic === true) {
        music.pause();
        isMusic = false;
        buttonIMG.src = "../resource/image/buttonMusic1.png";
    } 
    else {
        music.play();
        isMusic = true;
        buttonIMG.src = "../resource/image/buttonMusic.png";
    }
})

confeti.addEventListener('click', () => {
    confetti({
        particleCount: 500,
        spread: 300,
        origin: {y: 0}
        
    });
});

document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default anchor behavior

        // Get the target element
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Scroll to the target and center it in the viewport
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'  // This ensures the target is centered in the viewport
        });
    });
});


function calculateNextBirthday(birthday) {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Set the next birthday
    let nextBirthday = new Date(`${birthday} ${currentYear}`);
    if (now > nextBirthday) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    return nextBirthday;
}

function startCountdown(birthday) {
    const targetDate = calculateNextBirthday(birthday);

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        // Time calculations
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        // Update the DOM
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

        // Stop the countdown if the birthday has been reached
        if (timeDifference < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "<h2>Happy Birthday!</h2>";
        }
    }

    // Initial call and set interval
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

// Start the countdown (Change 'MM/DD' to your birthday)
startCountdown("11/20");
