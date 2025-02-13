function addScore(){
    let input = document.getElementById("score");
    let newScore = parseFloat(input.value.replace(",", "."));

    if (newScore == null){
        window.alert("Por favor, insira uma nota");
    } else if (isNaN(newScore) || newScore < 0 || newScore > 10){
        window.alert("A nota digitada é inválida. Por favor, insira uma nota válida.");
    }
    scores.push(newScore);
    showScore();
}

function showScore(){
    let textarea = document.getElementById("scores-panel");
    textarea.value = scores.map((n, i) => `A nota ${i + 1} foi ${n.toFixed(2)}`).join("\n");
}

function calcAverage(){

}

let addScoreButton = document.getElementById("add-score-button");
addScoreButton.addEventListener("click", addScore);

let scores = [];