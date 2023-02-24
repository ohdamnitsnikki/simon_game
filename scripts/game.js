let game = {
    currentGame: [],
    playerMoves: [],
    score: 0,
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;

    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                game.playerMoves.push(move);
                lightsOn(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}