const inputEl = document.querySelector('#validation-input');

function checkOnQuantitySymbols(event) {
  if (event.currentTarget.value.length != event.currentTarget.dataset.length) {
    if (event.currentTarget.classList.contains('valid')) {
      event.currentTarget.classList.remove('valid');
    }
    event.currentTarget.classList.add('invalid');
  } else {
    if (event.currentTarget.classList.contains('invalid')) {
      event.currentTarget.classList.remove('invalid');
    }
    event.currentTarget.classList.add('valid');
  }
}

inputEl.addEventListener('blur', checkOnQuantitySymbols);
