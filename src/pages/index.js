import './index.css';
import { buttonEdit, buttonAdd, validationConfig, avatarImg } from "../scripts/utils/constants.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { api } from '../scripts/components/Api.js';

let userId;

//Загрузка начальных данных

Promise.all([api.getUser(), api.getInitialCards()])
  .then(([userData, cards]) => {
    // установка данных пользователя
    userProfile.setUserInfo(userData.name, userData.about, userData.avatar);
    userId = userData._id;
    //отрисовка карточек
    section.renderItems(cards);
  })
  .catch(err => {
    console.log(err);
  });

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
  const newCard = new Card({
    name: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id
  },
    '.template-item',
    handleCardClick,
    (id) => {
      deleteCardPopup.open();
      deleteCardPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(res => {
            newCard.deleteCard();
            deleteCardPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            deleteCardPopup.changeButtonName('Да');
          });
      })
    },
    (id) => {
      if (newCard.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            newCard.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.addLike(id)
          .then(res => {
            newCard.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      }

    });
  const card = newCard.createCards();
  return card;
}

// Размещение карточек
const section = new Section({
  items: [], renderer: (cardItem) => {
    section.addItem(createCard(cardItem));
  }
},
  '.elements');

//Попап удаления карточек
const deleteCardPopup = new PopupWithForm('.popup_for_delete-card', () => { });

deleteCardPopup.setEventListeners();

// Попап редактирования профиля
const userProfile = new UserInfo({ userName: '.profile__title', userInfo: '.profile__subtitle', profileAvatarSelector: '.profile__avatar' });

const submitProfileForm = (dataUser) => {
  const { name, profession } = dataUser;

  api.editProfile(name, profession)
    .then((res) => {
      userProfile.setUserInfo(name, profession, res.avatar);
      editForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editForm.changeButtonName('Сохранить');
    });
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

//Попап замены аватара
const submitAvatarForm = (data) => {
  const avatar = data.avatar;
  api.changeAvatar(avatar)
    .then((res) => {
      userProfile.setUserInfo(res.name, res.about, res.avatar);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.changeButtonName('Сохранить');
    });
}

const avatarPopup = new PopupWithForm('.popup_for_avatar', submitAvatarForm);
avatarPopup.setEventListeners();

avatarImg.addEventListener('click', () => {
  formValidators['change-avatar-form'].resetErrors();
  avatarPopup.open();
  formValidators['change-avatar-form'].checkButtonValidity();
})

// Попап добавления карточки
const submitCardForm = (preCard) => {

  api.addCard(preCard['title'], preCard.link)
    .then(res => {
      const card = createCard(res)
      section.addItem(card);
      addForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addForm.changeButtonName('Создать');
    });
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

const handleCardClick = (data) => {
  popupImage.open(data);
}



