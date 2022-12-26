window.onload = () => {
  let inputRock = document.getElementById("rockButton");
  let inputPaper = document.getElementById("paperButton");
  let inputScissors = document.getElementById("scissorsButton");
  let outputPlayer = document.getElementById("scoreOutputPlayer");
  let outputComputer = document.getElementById("scoreOutputComputer");
  function increment(output) {
    output.textContent = 1 + parseInt(output.textContent);
  }
  let inputArea = document.getElementById("actionButtons");
  console.log(inputArea.children);
  for (let i = 0; i < inputArea.children.length; i ++) {
    let button = inputArea.children[i];
    button.addEventListener("click", () => increment(outputPlayer))
  }
};
