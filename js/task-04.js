
let counterValue = 0;

const handleClickDec = event => {
    value.textContent = counterValue -= 1;
}

const handleClickInc = event => {
    value.textContent = counterValue += 1;
}

const counter = document.querySelector("#counter");
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

btnDec.addEventListener("click", handleClickDec);
btnInc.addEventListener("click", handleClickInc);

console.log(counterValue);

