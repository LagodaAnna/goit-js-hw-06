let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

function onDecrementButtonClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function onIncrementButtonClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', onDecrementButtonClick);
incrementBtnEl.addEventListener('click', onIncrementButtonClick);
