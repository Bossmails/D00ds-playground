function updateMeme() {
  const img = document.getElementById("image").value;
  document.getElementById("memeImg").src = "images/" + img;
}

function updateText(text) {
  document.getElementById("memeText").innerText = text;
}
