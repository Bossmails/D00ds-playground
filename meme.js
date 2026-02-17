// Sounds
const clickSound = new Audio("sounds/click.mp3");

document.querySelectorAll("button, select, input").forEach(el => {
    el.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

// Meme generator
function changeMeme(img) {
    document.getElementById("memeImage").src = img;
}
