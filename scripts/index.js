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
const closeButton = popupEdit.querySelector('.popup__close-button');
const popupName = popupEdit.querySelector('.popup__input_info_name');
const popupProfession = popupEdit.querySelector('.popup__input_info_profession');
const formElement = popupEdit.querySelector('.popup__container');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup__add');
const closeButtonPopupAdd = popupAdd.querySelector('.popup__close-button');


// Добавление карточек

function render () {
  cards.forEach(renderCards);
}

function renderCards (item) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.element__title').innerText = item.name;
  newCard.querySelector('.element__img').src = item.link;

  cardsList.append(newCard);
}

// Попап редактирования профиля

function openPopup(event) {
  event.classList.add('popup_opened');
}

editButton.addEventListener('click', function () {
  openPopup(popupEdit);
  popupName.value = profileTitle.textContent;
  popupProfession.value = profileSubtitle.textContent;
});

function closePopup(event) {
  event.classList.remove('popup_opened');
}

closeButton.addEventListener('click', function () {
  closePopup(popupEdit);
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = `${popupName.value}`;
  profileSubtitle.textContent = `${popupProfession.value}`;
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);

// Попап добавления карточки

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
});

closeButtonPopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});


render ();
