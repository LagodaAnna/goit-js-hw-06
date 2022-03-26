const formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;
  if (!emailValue || !passwordValue) {
    alert('Для отправки формы необходимо заполнить все поля!');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}

formEl.addEventListener('submit', onFormSubmit);
