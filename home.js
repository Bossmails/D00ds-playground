// Sounds
const clickSound = new Audio("sounds/click.mp3");

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

// Background music
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.2;
