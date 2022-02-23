// Показать ошибку инпута
const showInputError = (errorMessage, input, inputErrorClass) => {
  input.classList.add(inputErrorClass);
  errorMessage.textContent = input.validationMessage;
}

// Скрыть ошибку инпута
const hideInputError = (errorMessage, input, inputErrorClass) => {
  input.classList.remove(inputErrorClass);
  errorMessage.textContent = '';
}

// Текстовая ошибка инпута
const checkInputValidity = (form, input, { inputErrorClass }) => {
  const errorMessage = form.querySelector(`.${input.id}-error`);
  if(input.validity.valid) {
    hideInputError (errorMessage, input, inputErrorClass);
  } else {
    showInputError (errorMessage, input, inputErrorClass);
  }
}

// Проверка валидности всех инпутов в форме
const hasInvalidInput = (inputs) => {
 return inputs.some((input) => {
   return !input.validity.valid;
 })
}

// Настройка активности кнопки
const checkButtonValidity = (inputs, button, {buttonDisabledClass}) => {
  if (!hasInvalidInput(inputs)) {
    button.removeAttribute('disabled');
    button.classList.remove(buttonDisabledClass);
  } else {
    button.setAttribute('disabled', '');
    button.classList.add(buttonDisabledClass);
  }
}

// Слушатель инпутов
const setEventListeners = (inputs, button, form, rest) => {
  checkButtonValidity (inputs, button, rest);
  inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
      checkInputValidity(form, input, rest);
      checkButtonValidity(inputs, button, rest);
    });
  })
}

// Валидация форм
const enableValidation = ({formSelector,inputSelector,saveButtonSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((form) => {
    form.addEventListener ('submit', (evt) => {
      evt.preventDefault();
      form.checkValidity();
    })
    const inputs = Array.from(form.querySelectorAll(inputSelector));
    const button = form.querySelector(saveButtonSelector);

    form.addEventListener('reset', () => checkButtonValidity(inputs, button, rest));
    setEventListeners(inputs, button, form, rest);
  })
}

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type-error',
  buttonDisabledClass: 'popup__save-button_disabled'
});