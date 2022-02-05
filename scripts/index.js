const cards = [
  {name: 'Карачаевск',
  link: './images/element__karachaevsk.jpg'},
  {name: 'Гора Эльбрус',
  link: './images/element__elbrus.jpg'},
  {name: 'Домбай',
  link: './images/element__dombai.jpg'},
  {name: 'Горный Алтай',
  link: './images/element__altai.jpg'},
  {name: 'Куршская коса',
  link: './images/element__kurshskaya-kosa.jpg'},
  {name: 'Мыс Острый',
  link: './images/element__mys-ostryi.jpg'}
];
const template = document.querySelector('.template-item').content;
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup__edit');
const closeButton = document.querySelector('.popup__close-button');
const popupName = popupEdit.querySelector('.popup__input_info_name');
const popupProfession = popupEdit.querySelector('.popup__input_info_profession');
const formElement = popupEdit.querySelector('.popup__container');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup__add');
const closeButtonPopupAdd = document.querySelector('.popup__add_button_close');
const saveButtonPopupAdd = document.querySelector('.popup__add_button_save');
const inputAddTitle = popupAdd.querySelector('.popup__input_info_title');
const inputAddImgSrc = popupAdd.querySelector('.popup__input_info_img-src');
let card;
const popupImg = document.querySelector('.popup_for_img');
const popupImgSrc = popupImg.querySelector('.popup__img');
const popupImgTitle = popupImg.querySelector('.popup__img-title');
const closeButtonPopupImg = popupImg.querySelector('.popup__img-close-button');

// Добавление карточек
function renderCards (item) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.element__title').textContent = item.name;
  newCard.querySelector('.element__img').src = item.link;

  newCard.querySelector('.element__like').addEventListener('click', likeHundler);
  newCard.querySelector('.element__delete-button').addEventListener('click', deleteCardHendler);
  newCard.querySelector('.element__img').addEventListener('click', popupImgHandler);
  cardsList.append(newCard);
}

function render () {
  cards.forEach(renderCards);
}

// Попап редактирования профиля

function openPopup(evt) {
  evt.classList.add('popup_opened');
}

editButton.addEventListener('click', function () {
  openPopup(popupEdit);
  popupName.value = profileTitle.textContent;
  popupProfession.value = profileSubtitle.textContent;
});

function closePopup(evt) {
  evt.classList.remove('popup_opened');
}

closeButton.addEventListener('click', function () {
  closePopup(popupEdit);
  closePopup(popupImg);
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = `${popupName.value}`;
  profileSubtitle.textContent = `${popupProfession.value}`;
  closePopup(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler);

// Попап добавления карточки

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

closeButtonPopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

function formAddSubmitHandler (evt) {
  evt.preventDefault();

  card = template.cloneNode(true);
  card.querySelector('.element__title').textContent = `${inputAddTitle.value}`;
  card.querySelector('.element__img').src = `${inputAddImgSrc.value}`;

  cardsList.prepend(card);
  closePopup(popupAdd);
}

saveButtonPopupAdd.addEventListener('click', formAddSubmitHandler);

// Лайк

function likeHundler (evt) {
  evt.target.classList.toggle('element__like_active');
};

// Удаление карточки

function deleteCardHendler (evt) {
  evt.target.closest('.element').remove();
}

// Попап с картинкой
function popupImgHandler (evt) {
  evt.preventDefault();

  openPopup(popupImg);
  card = evt.target.closest('.element');
  const imgSrc = card.querySelector('.element__img').src;
  const title = card.querySelector('.element__title').textContent;

  popupImgSrc.src = imgSrc;
  popupImgTitle.textContent = title;
}

closeButtonPopupImg.addEventListener('click', function () {
  closePopup(popupImg);
});

render ();
