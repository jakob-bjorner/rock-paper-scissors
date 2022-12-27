window.onload = () => {
  let inputRock = document.getElementById("rockButton");
  let inputPaper = document.getElementById("paperButton");
  let inputScissors = document.getElementById("scissorsButton");
  let outputPlayer = document.getElementById("scoreOutputPlayer");
  let outputComputer = document.getElementById("scoreOutputComputer");
  function increment(output) {
    output.textContent = 1 + parseInt(output.textContent);
  }
  function playRound() {
    
  }
  function playGame() {

  }
  function restart() {

  }
  function endGame() {

  }
  function checkGameOver() {
    // return 'player' if player won, else 'computer'
  }
  let inputArea = document.getElementById("actionButtons");
  for (let i = 0; i < inputArea.children.length; i ++) {
    let button = inputArea.children[i];
    button.addEventListener("click", () => increment(outputPlayer))
  }
  console.log("hello");
};
