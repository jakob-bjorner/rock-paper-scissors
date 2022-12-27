window.onload = () => {
  let outputPlayer = document.getElementById("scoreOutputPlayer");
  let outputComputer = document.getElementById("scoreOutputComputer");
  let outputWinPlayer = document.getElementById("winsOutputPlayer");
  let outputWinComputer = document.getElementById("winsOutputComputer");
  let gameHistory = document.getElementById("gameHistory");
  
  function incrementScore(output) {
    incrementOutputValue(output);
  }
  function incrementOutputValue(output) {
    output.textContent = 1 + parseInt(output.textContent);
  }
  function getOutputValue(output) {
    return parseInt(output.textContent);
  }
  function setOutputValue(output, value) {
    output.textContent = value;
  }

  function addWinToken(playWinner) {
    // play winner can either be player, computer, or tie
    if (!(["computer", "player", "tie"]).includes(playWinner)) {
        //do nothing
        console.error("unable to add winToken of type " + playWinner);
    }
    let winToken = document.createElement("p");
    winToken.className = "winToken " + playWinner
    winToken.textContent = playWinner;
    gameHistory.appendChild(winToken);
  }
  function getInput(button) {
    let classList = button.classList;
    if (classList.contains("rock")) {
      return 0;
    } else if (classList.contains("paper")) {
      return 1;
    } else {
      return 2;
    }
  }
  function playRound(button) {
    let input = getInput(button);
    let computerMove = Math.floor(Math.random() * 3);
    // 0 is rock, 1 is paper, 2 is scissors
    // player vs cpu, should have 3 ** 2 = 9 options
    if (computerMove === input) {
      // tie condition 3 options
      // does nothing
      addWinToken("tie");
    } else if (
      (input === 0 && computerMove === 2) ||
      (input === 1 && computerMove === 0) ||
      (input === 2 && computerMove === 1)
    ) {
      // player win conditions 3 options
      incrementScore(outputPlayer);
      addWinToken("player");
    } else {
      // player lose conditions 3 options
      incrementScore(outputComputer);
      addWinToken("computer");
    }
    checkGameState();
  }
  function checkGameState() {
    let winner = isGameOver();
    if (winner) {
        let isRestarting = displayWinner(winner);
        if (isRestarting) {
            restart();
        } else {
            resetScores();
            if (winner === "player") {
                incrementOutputValue(outputWinPlayer);
            } else {
                incrementOutputValue(outputWinComputer);
            }
        }
    }
  }
  function resetScores() {
      setOutputValue(outputPlayer, 0);
      setOutputValue(outputComputer, 0);
  }
  function restart() {
    resetScores();
    setOutputValue(outputWinComputer, 0);
    setOutputValue(outputWinPlayer, 0);
  }
  function displayWinner(winner) {
    return !confirm("congratulations to the " + winner + ". Player, would you like to continue? (keeps track of the wins)");
  }
  function isGameOver() {
    // returns player, computer, or false depending on the game state.
    if (getOutputValue(outputComputer) >= 5) {
        return "computer";
    } else if (getOutputValue(outputPlayer) >= 5) {
        return "player";
    } else {
        return false;
    }

  }
  let inputArea = document.getElementById("actionButtons");
  for (let i = 0; i < inputArea.children.length; i++) {
    let button = inputArea.children[i];
    button.addEventListener("click", () => playRound(button));
  }
};
