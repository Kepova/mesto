import { validationConfig, cards } from "./utils.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

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

// Валидация форм
const editFormValidation = new FormValidator(validationConfig, formPopupProfile);
const addFormValidation = new FormValidator(validationConfig, formPopupAdd);

editFormValidation.enableValidation();
addFormValidation.enableValidation();

// Добавление карточек

function render(data) {
  const newCard = new Card(data, '.template-item', popupImgHandler);
  const card = newCard.createCards();
  cardsList.prepend(card);
}

cards.forEach((data) => {
  render(data);
})

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
  editFormValidation.resetErrors();

  popupName.value = profileTitle.textContent;
  popupProfession.value = profileSubtitle.textContent;

  editFormValidation.checkButtonValidity();

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
  addFormValidation.resetErrors();
  addFormValidation.checkButtonValidity()
  openPopup(popupAdd);
});

function resetAddForm() {
  inputAddTitle.value = '';
  inputAddImgSrc.value = '';
}

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const item = { name: inputAddTitle.value, link: inputAddImgSrc.value };
  render(item);
  resetAddForm();

  closePopup(popupAdd);
}

formPopupAdd.addEventListener('submit', formAddSubmitHandler);

// Попап с картинкой

function popupImgHandler(item) {
  openPopup(popupImg);
  popupImgSrc.src = item.link;
  popupImgSrc.alt = item.name;
  popupImgTitle.textContent = item.name;
}
