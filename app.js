let minNumber = 0;
let maxNumber = 0;
let quantitieOfNumber = 0;
let numberList = [];
let resultList = [];

function intervalChosenOfNumberList(minNumber, maxNumber) {
  for (let i = 0; i < maxNumber - minNumber + 1; i++) {
    numberList.push(minNumber + i);
  }
  // console.log(numberList);
  return numberList;
}
// console.log(intervalChosenOfNumberList(10, 20));

function chosenRandowNumber() {
  const list = intervalChosenOfNumberList(10, 20);
  console.log('@lista com os números em sequencia:', list);

  let randowIndex = Math.floor(Math.random() * list.length);
  let randowNumber = list[randowIndex];
  console.log(randowNumber);
  return randowNumber;
}

// console.log(chosenRandowNumber());
function verifyArrayRandowNumber(quantitieOfNumber) { // refazer esta parte da lógica
  while (resultList.length < quantitieOfNumber) {
    let exists = resultList.includes(chosenRandowNumber());
    if (exists) {
      verifyArrayRandowNumber();
    } else {
      resultList.push(chosenRandowNumber());
    }
  }
  return resultList;
}

console.log(verifyArrayRandowNumber(3));
