import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor({ data }, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
  }

  open() {
    super.open();
    const popupImgSrc = this._popupSelector.querySelector('.popup__img');
    const popupImgTitle = this._popupSelector.querySelector('.popup__img-title');
    popupImgSrc.src = this._link;
    popupImgSrc.alt = this._name;
    popupImgTitle.textContent = this._name;
  }
}
