import { cards } from "../scripts/cards.js";
const template = document.querySelector('.template-item').content;
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_for_edit');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupName = popupEdit.querySelector('.popup__input_info_name');
const popupProfession = popupEdit.querySelector('.popup__input_info_profession');
const formPopupProfile = popupEdit.querySelector('.popup__form-edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_for_add');
const formPopupAdd = popupAdd.querySelector('.popup__form-add');
const inputAddTitle = popupAdd.querySelector('.popup__input_info_title');
const inputAddImgSrc = popupAdd.querySelector('.popup__input_info_img-src');
const popupImg = document.querySelector('.popup_for_img');
const popupImgSrc = popupImg.querySelector('.popup__img');
const popupImgTitle = popupImg.querySelector('.popup__img-title');
const popupContainers = document.querySelectorAll('.popup');
const saveButtonPopupAdd = popupAdd.querySelector('.popup__save-button');

// Добавление карточек
function createCards(item) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.element__title').textContent = item.name;
  const elementImg = newCard.querySelector('.element__img');
  elementImg.alt = item.name;
  elementImg.src = item.link;

  newCard.querySelector('.element__like').addEventListener('click', likeHundler);
  newCard.querySelector('.element__delete-button').addEventListener('click', deleteCardHendler);
  elementImg.addEventListener('click', (evt) => popupImgHandler(evt, item));
  return newCard;
}

function render() {
  cards.forEach((card) => {
    cardsList.append(createCards(card));
  })
}

// Открытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

// Закрытие попапов

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

closeButtons.forEach(btn => btn.addEventListener('click', function () {
  closePopup(btn.closest('.popup'));
}))

// Закрытие попапа нажатием на оверлей

popupContainers.forEach(popup => popup.addEventListener('mousedown', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popup);
  };
}))

// Закрытие попапа нажатием на Esc

const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
}

// Попап редактирования профиля

editButton.addEventListener('click', function () {
  popupName.value = profileTitle.textContent;
  popupProfession.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});

function submitProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = `${popupName.value}`;
  profileSubtitle.textContent = `${popupProfession.value}`;
  closePopup(popupEdit);
}

formPopupProfile.addEventListener('submit', submitProfileForm);

// Попап добавления карточки

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

function resetAddForm() {
  inputAddTitle.value = '';
  inputAddImgSrc.value = '';
}

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const item = { name: inputAddTitle.value, link: inputAddImgSrc.value };
  cardsList.prepend(createCards(item));
  resetAddForm();
  disableButton(saveButtonPopupAdd, validationConfig.buttonDisabledClass);
  closePopup(popupAdd);
}

formPopupAdd.addEventListener('submit', formAddSubmitHandler);

// Лайк

function likeHundler(evt) {
  evt.target.classList.toggle('element__like_active');
};

// Удаление карточки

function deleteCardHendler(evt) {
  evt.target.closest('.element').remove();
}

// Попап с картинкой

function popupImgHandler(evt, item) {
  evt.preventDefault();

  openPopup(popupImg);
  const card = evt.target.closest('.element');
  const imgSrc = card.querySelector('.element__img');
  const title = card.querySelector('.element__title');
  item = { name: `${title.textContent}`, link: `${imgSrc.src}` };
  popupImgSrc.src = item.link;
  popupImgSrc.alt = item.name;
  popupImgTitle.textContent = item.name;
}

render();
