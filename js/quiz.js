const questions = [
  "Do you move first?",
  "Do you trust vibes over logic?",
  "Do you like chaos?",
  "Are you community-driven?",
  "Do you love memes?"
];

const backgrounds = [
  "images/result-1.jpg",
  "images/result-2.jpg",
  "images/result-3.jpg"
];

let index = 0;

function loadQuestion() {
  document.body.style.backgroundImage =
    `url(${backgrounds[index % backgrounds.length]})`;
  document.getElementById("question").innerText = questions[index];
}

function answer() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const img = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.innerHTML = `
    <div class="card">
      <h2>Your D00d Personality</h2>
      <img src="${img}" style="width:100%; border-radius:15px;">
      <br><br>
      <button class="btn quiz-btn" onclick="location.href='index.html'">
        Back Home
      </button>
    </div>
  `;
}

loadQuestion();
