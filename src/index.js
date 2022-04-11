const button1 = document.querySelector("#firstBtn");
const button2 = document.querySelector("#secondBtn");
const button3 = document.querySelector("#thirdBtn");
const arrayNum = [];

button1.addEventListener("click", throwDice1);
button2.addEventListener("click", throwDice2);
button3.addEventListener("click", throwDice3);

function throwDice1() {
  const num = (Math.floor(Math.random() * 6) + 1);
  const parrafo = document.getElementById("rndNum1");
  parrafo.textContent = num;
}

function throwDice2() {
  const num = (Math.floor(Math.random() * 6) + 1);
  const parrafo = document.getElementById("rndNum2");
  parrafo.textContent = num;
}

function throwDice3() {
  const num = (Math.floor(Math.random() * 6) + 1);
  const parrafo = document.getElementById("rndNum3");
  parrafo.textContent = num;
}

/* const DICE1 = {
  div: document.getElementById("rndNum1"),
  button: document.getElementById("firstBtn")
};

DICE1.button.addEventListener("click", function() {
  const num = (Math.floor(Math.random() * 6) + 1);
  console.log(num);
  DICE1.div.innerHTML = num;
}); */
