export default class Card {
  constructor(data, cardTemplateSelector, handlerImg) {
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._name = data.name;
    this._link = data.link;
    this._data = data;
    this._handlerImg = handlerImg;
  }

  _handleLike = () => {
    this._likeButton.classList.toggle('element__like_active');
  };

  _handleCardDelete = () => {
    this._newCard.remove();
    this._newCard = null;
  }

  _setEventlisteners() {
    const deletButton = this._newCard.querySelector('.element__delete-button');
    this._likeButton.addEventListener('click', this._handleLike);
    deletButton.addEventListener('click', this._handleCardDelete);
    this._elementImg.addEventListener('click', () => this._handlerImg(this._data));
  }

  createCards() {
    this._newCard = this._template.cloneNode(true);
    this._likeButton = this._newCard.querySelector('.element__like');
    this._elementImg = this._newCard.querySelector('.element__img');

    this._newCard.querySelector('.element__title').textContent = this._name;
    this._elementImg.alt = this._name;
    this._elementImg.src = this._link;

    this._setEventlisteners();

    return this._newCard;
  }
}
