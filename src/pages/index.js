import './index.css';
import { buttonEdit, popupName, popupProfession, formPopupProfile, buttonAdd, formPopupAdd } from "../scripts/utils/constants.js";
import { validationConfig, cards } from "../scripts/utils/utils.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

// Валидация форм
const formEditValidation = new FormValidator(validationConfig, formPopupProfile);
const formAddValidation = new FormValidator(validationConfig, formPopupAdd);

formEditValidation.enableValidation();
formAddValidation.enableValidation();

// Создание карточек
const createCard = (data) => {
  const newCard = new Card(data, '.template-item', handleCardClick);
  const card = newCard.createCards();
  return card;
}

// Размещение карточек
const renderCard = (data) => {
  const section = new Section({
    items: data, renderer: (cardItem) => {
      section.addItem(createCard(cardItem));
    }
  },
    '.elements');
  section.renderItems(data);
}

// Попап редактирования профиля
const userProfile = new UserInfo({ userName: '.profile__title', userInfo: '.profile__subtitle' });

const submitProfileForm = (dataUser) => {
  const { name, profession } = dataUser;
  userProfile.setUserInfo(name, profession);

}
const editForm = new PopupWithForm('.popup_for_edit', submitProfileForm);

editForm.setEventListeners();

buttonEdit.addEventListener('click', function () {
  formEditValidation.resetErrors();
  const { name, info } = userProfile.getUserInfo();
  popupName.value = name;
  popupProfession.value = info;

  formEditValidation.checkButtonValidity();

  editForm.open();
});

// Попап добавления карточки
const submitCardForm = (preCard) => {
  renderCard([{
    name: preCard['title'],
    link: preCard.link
  }]);
}
const addForm = new PopupWithForm('.popup_for_add', submitCardForm);

buttonAdd.addEventListener('click', () => {
  addForm.open();
  formAddValidation.resetErrors();
  formAddValidation.checkButtonValidity();
});

addForm.setEventListeners();

// Попап с картинкой
function handleCardClick(item) {
  const popupImage = new PopupWithImage({ data: item }, '.popup_for_img');
  popupImage.open();
  popupImage.setEventListeners();
}

// Создание начальных карточек
renderCard(cards);
