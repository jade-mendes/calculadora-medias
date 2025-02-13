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
    document.getElementById("score").value = "";
}

function showScore(){
    let textarea = document.getElementById("scores-panel");
    textarea.value = scores.map((n, i) => `A nota ${i + 1} foi ${n.toFixed(2)}`).join("\n");
}

function calcAverage(){
    if (scores.length == 0){
        window.alert("Erro: Insira notas antes de calcular a média");
        return;
    }
    let averageScore = 0;
    for (let i = 0; i < scores.length; i++){
        averageScore += scores[i];
    }
    averageScore = (averageScore/scores.length).toFixed(2);
    let resultText = document.getElementById("result");
    resultText.innerText = averageScore.toString();
}

let addScoreButton = document.getElementById("add-score-button");
addScoreButton.addEventListener("click", addScore);

let calcAverageButton = document.getElementById("calc-button");
calcAverageButton.addEventListener("click", calcAverage);

let scores = [];