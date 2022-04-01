import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {

  open(data) {
    super.open();
    this._popupImgSrc.src = data.link;
    this._popupImgSrc.alt = data.name;
    this._popupImgTitle.textContent = data.name;
  }
}
