const highScoresList = document.querySelector('#highScoresList');
let highScores = "";

getCategoryScores = (c) => {


    if (c.value == "General Knowledge") {
        highScores = JSON.parse(localStorage.getItem('generalHighScores')) || [];

    } else if (c.value == "Sports") {
        highScores = JSON.parse(localStorage.getItem('sportsHighScore')) || [];
    } else if (c.value == "History") {
        highScores = JSON.parse(localStorage.getItem('historyHighScore')) || [];
    }




    highScoresList.innerHTML =
        highScores.map(score => {
            return (`<li class="high-score"> ${score.name}  -  ${score.score} </li>`)
        }).join("");
}