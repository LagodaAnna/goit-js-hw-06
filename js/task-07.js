const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `${inputEl.value}px`;

function onInputRangeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', onInputRangeChange);
