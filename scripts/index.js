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
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const popupName = popup.querySelector('.popup__input_info_name');
const popupProfession = popup.querySelector('.popup__input_info_profession');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = popup.querySelector('.popup__container');
const cardsList = document.querySelector('.elements');

function render () {
  cards.forEach(renderCards);
}

function renderCards (item) {
  const newCard = template.cloneNode(true);
  newCard.querySelector('.element__title').innerText = item.name;
  newCard.querySelector('.element__img').src = item.link;

  cardsList.append(newCard);
}

function openPopup() {
  popup.classList.add('popup_opened');
  popupName.value = profileTitle.textContent;
  popupProfession.value = profileSubtitle.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = `${popupName.value}`;
  profileSubtitle.textContent = `${popupProfession.value}`;
  closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);

render ();
