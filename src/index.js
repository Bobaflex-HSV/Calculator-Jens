/**
 * Create the class Caclculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

class Calculator {
  constructor() {
    this._keyHistory = [];
  }

  // history: once the = key is pressed, it keeps the last value in
  //            memory in an array
  history(lastKeyPressed) {
    this._keyHistory.push(lastKeyPressed);
  }

  // equals: returns the value (thanks to an 'eval' function)
  equals() {
    // ATTENTION: does not check for invalid parameters

    // convert history to string
    let stringValue = this._keyHistory.toString();
    stringValue = stringValue.split(",").join("");
    // evaluate history
    let value = eval(stringValue);
    value = value.toString();
    // assign computed value to history so result can be reused
    return value;
  }

  // - clear: clears the history
  clear() {
    this._keyHistory = [];
  }
}

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach(key => {
  if (key.innerText !== "=") {
    key.addEventListener("click", e => {
      myCalculator.history(key.innerText);
      print(e.target.innerText);
    });
  }
});

document.querySelector("#calculator .clear").addEventListener("click", () => {
  calculatorScreen.innerHTML = "";
  myCalculator.clear();
});
// Implement here the event when the = key is pressed

document.querySelectorAll("#calculator span").forEach(key => {
  if (key.innerText === "=") {
    key.addEventListener("click", e => {
      let result = myCalculator.equals();
      myCalculator.clear();
      myCalculator.history(result);
      calculatorScreen.innerHTML = "";
      print(result);
    });
  }
});

const myCalculator = new Calculator();
