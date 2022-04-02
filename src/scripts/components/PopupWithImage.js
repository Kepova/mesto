import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupImgSrc = this._popup.querySelector('.popup__img');
    this._popupImgTitle = this._popup.querySelector('.popup__img-title');
  }

  open(data) {
    super.open();
    this._popupImgSrc.src = data.link;
    this._popupImgSrc.alt = data.name;
    this._popupImgTitle.textContent = data.name;
  }
}
