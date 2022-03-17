export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._button = this._form.querySelector(this._settings.saveButtonSelector);
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    })
  }

  _disableButton() {
    this._button.setAttribute('disabled', '');
    this._button.classList.add(this._settings.buttonDisabledClass);
  }

  checkButtonValidity() {
    if (!this._hasInvalidInput()) {
      this._button.removeAttribute('disabled');
      this._button.classList.remove(this._settings.buttonDisabledClass);
    } else {
      this._disableButton();
    }
  }

  _showInputError(errorMessage, input) {
    input.classList.add(this._settings.inputErrorClass);
    errorMessage.textContent = input.validationMessage;
  }

  _hideInputError(errorMessage, input) {
    input.classList.remove(this._settings.inputErrorClass);
    errorMessage.textContent = '';
  }

  _checkInputValidity(input) {
    const errorMessage = this._form.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
      this._hideInputError(errorMessage, input);
    } else {
      this._showInputError(errorMessage, input);
    }
  }

  _setEventListeners() {
    this.checkButtonValidity();
    this._inputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        this._checkInputValidity(input);
        this.checkButtonValidity();
      });
    })
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._form.checkValidity();
    })
    this._setEventListeners();
  }

  resetErrors() {
    this._form.reset();
    this._inputs.forEach((input) => {
      const errorMessage = this._form.querySelector(`.${input.id}-error`);
      this._hideInputError(errorMessage, input);
    });
  }
}
