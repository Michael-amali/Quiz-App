 const username = document.querySelector('#username');
 const saveScorebtn = document.querySelector('#saveScoreBtn');

 const generalHighScores = JSON.parse(localStorage.getItem("generalHighScores")) || [];
 const sportsHighScore = JSON.parse(localStorage.getItem("sportsHighScore")) || [];
 const historyHighScore = JSON.parse(localStorage.getItem("historyHighScore")) || [];
 const MAX_HIGH_SCORES = 10;

 const finalScore = document.querySelector('#finalScore');
 const mostRecentScore = localStorage.getItem('mostRecentScore');
 finalScore.innerText = mostRecentScore;

 username.addEventListener('keyup', () => {
     saveScorebtn.disabled = !username.value;
 })
 saveHighScore = evt => {
     evt.preventDefault();
     const score = {
         score: mostRecentScore,
         name: username.value
     }

     const category = localStorage.getItem('Category');


     if (category == "General Knowledge") {
         generalHighScores.push(score);

         generalHighScores.sort((a, b) => {
             b.score - a.score;
         });


         generalHighScores.splice(5);
         localStorage.setItem("generalHighScores", JSON.stringify(generalHighScores));
     } else if (category == "History") {
         historyHighScore.push(score);

         historyHighScore.sort((a, b) => {
             b.score - a.score;
         });

         historyHighScore.splice(5);
         localStorage.setItem("historyHighScore", JSON.stringify(historyHighScore));
     } else if (category == "Sports") {
         sportsHighScore.push(score);

         sportsHighScore.sort((a, b) => {
             b.score - a.score;
         });

         sportsHighScore.splice(5);
         localStorage.setItem("sportsHighScore", JSON.stringify(sportsHighScore));
     }


     window.location.assign("highScores.html");

 }