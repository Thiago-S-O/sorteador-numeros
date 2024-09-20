let minNumber = 0;
let maxNumber = 0;
let quantitieOfNumber = 0;
let numberList = [];
let resultList = [];

function intervalChosenOfNumberList(minNumber, maxNumber) {
  for (let i = 0; i < (maxNumber - minNumber); i++) {
    // se deixar só minNumber + i, o js concatena já que é a soam de variáveis do tipo any
    let inputNumberInArray = minNumber - 1 + i + 1;
    // let inputNumberInArray = parseInt(minNumber + i);
    numberList.push(inputNumberInArray);
  }
  return numberList;
}

let list = intervalChosenOfNumberList(minNumber, maxNumber);

function chosenRandowNumber() {
  let randowIndex = Math.floor(Math.random() * list.length);
  let randowNumber = list[randowIndex];
  return randowNumber;
}

function verifyArrayRandowNumber() {
  let drawnNumber = chosenRandowNumber();

  if (!resultList.includes(drawnNumber)) {
    resultList.push(drawnNumber);
  }
  return resultList;
}

function generateArray(quantitieOfNumber) {
  while (resultList.length < quantitieOfNumber) {
    verifyArrayRandowNumber();
  }
  return resultList;
}

// parte da interação com o html 
function showTextInScreen(id, textShow) {
  let title = document.getElementById(id);
  title.innerHTML = textShow;
  // responsiveVoice.speak(textShow, 'Brazilian Portuguese Female', {rate:1.2});
}

function clearInput(id) {
  let field = document.getElementById(id);
  field.value = "";
}

function restartGame() {
  numberList = [];
  resultList = [];
  clearInput('de');
  clearInput('ate');
  clearInput('quantidade');
  showTextInScreen('resultado-tela',`Números sorteados: nenhum até agora`);
  document.getElementById("btn-reiniciar").setAttribute("disabled", true);
  document.getElementById("btn-sortear").removeAttribute("disabled");
}

function drawnNumbers() { // sortear
  minNumber = document.getElementById('de').value;
  maxNumber = document.getElementById('ate').value;
  quantitieOfNumber = document.getElementById('quantidade').value;

  if ((minNumber & maxNumber & quantitieOfNumber == 0) || (maxNumber <= minNumber) || (quantitieOfNumber > (maxNumber - minNumber))) {
    showTextInScreen('resultado-tela',`
      Parâmetros inválidos!
      Atenção a algumas regras:
        - Preencher todos os campos;
        - A quantidade não pode ser maior do que a o intervalos dos valores;
        - O valor máximo não pode ser igual ou menor do que o valor mínimo.
    `);
  } else {
    intervalChosenOfNumberList(minNumber, maxNumber);
    let result = generateArray(quantitieOfNumber);
    showTextInScreen('resultado-tela',`Números sorteados: ${result}`);
    console.log(result);
  }

  document.getElementById("btn-reiniciar").removeAttribute("disabled");
  document.getElementById("btn-sortear").setAttribute("disabled", true);
}
