const showInputError = (errorMessage, input, inputErrorClass) => {
  input.classList.add(inputErrorClass);
  errorMessage.textContent = input.validationMessage;
}

const hideInputError = (errorMessage, input, inputErrorClass) => {
  input.classList.remove(inputErrorClass);
  errorMessage.textContent = '';

}

const checkInputValidity = (form, input, { inputErrorClass }) => {
  const errorMessage = form.querySelector(`.${input.id}-error`);

  if(input.validity.valid) {
    hideInputError (errorMessage, input, inputErrorClass);
  } else {
    showInputError (errorMessage, input, inputErrorClass);
  }
}

const checkButtonValidity = (form, button) => {
  if (form.checkValidity()) {
    button.removeAttribute('disabled');
    button.classList.remove('popup__save-button_disabled');
  } else {
    button.setAttribute('disabled', '');
    button.classList.add('popup__save-button_disabled');
  }
}

const enableValidation = ({formSelector, ...rest}) => {
  const form = document.querySelector(formSelector);
  form.addEventListener ('submit', (evt) => {
    evt.preventDefault();
    form.checkValidity();
  })

  const inputs = form.querySelectorAll('.popup__input');
  const button = form.querySelector('.popup__save-button');

  inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      checkInputValidity(form, input, rest);
      checkButtonValidity(form, button);
    });
  })
}

enableValidation ({
  formSelector: '.popup__form',
  inputErrorClass: 'popup__input_type-error',
  inputSelector: '.popup__input',
  saveButton: '.popup__save-button'
});
