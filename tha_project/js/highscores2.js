const highscores = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//need to read//
highScoresList.innerHTML = highScores
    .map(score =>{
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");
