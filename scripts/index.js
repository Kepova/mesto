const cards = [
  {
    name: 'Карачаевск',
    link: './images/element__karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/element__elbrus.jpg'
  },
  {
    name: 'Домбай',
    link: './images/element__dombai.jpg'
  },
  {
    name: 'Горный Алтай',
    link: './images/element__altai.jpg'
  },
  {
    name: 'Куршская коса',
    link: './images/element__kurshskaya-kosa.jpg'
  },
  {
    name: 'Мыс Острый',
    link: './images/element__mys-ostryi.jpg'
  }
];
const template = document.querySelector('.template-item').content;
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_for_edit');
const closeButton = document.querySelectorAll('.popup__close-button');
const popupName = popupEdit.querySelector('.popup__input_info_name');
const popupProfession = popupEdit.querySelector('.popup__input_info_profession');
const formElement = popupEdit.querySelector('.popup__container');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_for_add');
const saveButtonPopupAdd = document.querySelector('.popup__add-button-save');
const inputAddTitle = popupAdd.querySelector('.popup__input_info_title');
const inputAddImgSrc = popupAdd.querySelector('.popup__input_info_img-src');
const popupImg = document.querySelector('.popup_for_img');
const popupImgSrc = popupImg.querySelector('.popup__img');
const popupImgTitle = popupImg.querySelector('.popup__img-title');

// Добавление карточек
function renderCards(item) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.element__title').textContent = item.name;
  newCard.querySelector('.element__img').alt = item.name;
  newCard.querySelector('.element__img').src = item.link;

  newCard.querySelector('.element__like').addEventListener('click', likeHundler);
  newCard.querySelector('.element__delete-button').addEventListener('click', deleteCardHendler);
  newCard.querySelector('.element__img').addEventListener('click', (evt) => popupImgHandler(evt, item));
  return newCard;
}

function render() {
  cards.forEach((card) => {
    cardsList.append(renderCards(card));
  })
}

// Открытие попапа

function openPopup(evt) {
  evt.classList.add('popup_opened');
}

// Закрытие попапов

function closePopup(evt) {
  evt.classList.remove('popup_opened');
}

closeButton.forEach(btn => btn.addEventListener('click', function () {
  closePopup(btn.closest('.popup'));
}))

// Попап редактирования профиля

editButton.addEventListener('click', function () {
  openPopup(popupEdit);
  popupName.value = profileTitle.textContent;
  popupProfession.value = profileSubtitle.textContent;
});

function formSubmitHandler(evt) {
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

function resetAddForm() {
  inputAddTitle.value = '';
  inputAddImgSrc.value = '';
}

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const item = { name: inputAddTitle.value, link: inputAddImgSrc.value };
  cardsList.prepend(renderCards(item));
  resetAddForm()
  closePopup(popupAdd);
}

saveButtonPopupAdd.addEventListener('click', formAddSubmitHandler);

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
