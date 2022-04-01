import './index.css';
import { buttonEdit, formPopupProfile, buttonAdd, formPopupAdd, validationConfig, cards } from "../scripts/utils/constants.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

// Валидация форм
const formValidators = {}

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement);

    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);

// Создание карточек
const createCard = (data) => {
  const newCard = new Card(data, '.template-item', handleCardClick);
  const card = newCard.createCards();
  return card;
}

// Размещение карточек
const section = new Section({
  items: cards, renderer: (cardItem) => {
    section.addItem(createCard(cardItem));
  }
},
  '.elements');

// Создание начальных карточек
section.renderItems(cards);

// Попап редактирования профиля
const userProfile = new UserInfo({ userName: '.profile__title', userInfo: '.profile__subtitle' });

const submitProfileForm = (dataUser) => {
  const { name, profession } = dataUser;
  userProfile.setUserInfo(name, profession);

}
const editForm = new PopupWithForm('.popup_for_edit', submitProfileForm);

editForm.setEventListeners();

buttonEdit.addEventListener('click', function () {
  formValidators['edit-form'].resetErrors();
  const data = userProfile.getUserInfo();
  editForm.setInputValues(data);

  formValidators['edit-form'].checkButtonValidity();

  editForm.open();
});

// Попап добавления карточки
const submitCardForm = (preCard) => {
  const card = createCard({
    name: preCard['title'],
    link: preCard.link
  })
  section.addItem(card);
}
const addForm = new PopupWithForm('.popup_for_add', submitCardForm);

buttonAdd.addEventListener('click', () => {
  addForm.open();
  formValidators['add-form'].resetErrors();
  formValidators['add-form'].checkButtonValidity();
});

addForm.setEventListeners();

// Попап с картинкой
const popupImage = new PopupWithImage('.popup_for_img');
popupImage.setEventListeners();

function handleCardClick(data) {
  popupImage.open(data);
}

