// Sounds
const clickSound = new Audio("sounds/click.mp3");
const swipeSound = new Audio("sounds/swipe.mp3");

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

// Quiz questions
const questions = [
    "Do you like adventure?",
    "Do you enjoy puzzles?",
    "Are you creative?",
    "Do you like challenges?",
    "Are you social?"
];
let current = 0;

function answer(ans) {
    swipeSound.play();
    current++;
    if(current < questions.length) {
        document.getElementById("question").innerText = questions[current];
        document.getElementById("quizBody").style.backgroundImage = `url('images/result-${current}.jpg')`;
    } else {
        // Celebration
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        document.getElementById("quizCard").innerHTML = `<h2>Your personality is revealed!</h2>
        <button onclick="location.href='index.html'">Back to Home</button>`;
    }
}
