export default class Card {
  constructor(data, cardTemplateSelector, handlerImg, handleDeleteClick, handleLikeClick) {
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId,
      this._ownerId = data.ownerId;
    this._data = data;
    this._handlerImg = handlerImg;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  deleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  }

  _setEventlisteners() {
    this._deleteButton = this._newCard.querySelector('.element__delete-button');

    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
    this._elementImg.addEventListener('click', () => this._handlerImg(this._data));
  }

  isLiked() {
    const userHasLike = this._likes.find(user => user._id === this._userId);
    return userHasLike;
  }

  _showLike() {
    this._likeButton.classList.add('element__like_active');
  };

  _hideLike() {
    this._likeButton.classList.remove('element__like_active');
  };

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeCount.textContent = this._likes.length;

    if (this.isLiked()) {
      this._showLike()
    } else {
      this._hideLike()
    }
  }

  createCards() {
    this._newCard = this._template.cloneNode(true);
    this._likeButton = this._newCard.querySelector('.element__like');
    this._elementImg = this._newCard.querySelector('.element__img');
    this._likeCount = this._newCard.querySelector('.element__like-count');

    this._newCard.querySelector('.element__title').textContent = this._name;
    this._elementImg.alt = this._name;
    this._elementImg.src = this._link;

    this.setLikes(this._likes);

    this._setEventlisteners();

    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    }

    return this._newCard;
  }
}
