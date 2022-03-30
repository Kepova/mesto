import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll('.popup__input')];
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    })
    return values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
}
