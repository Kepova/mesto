let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let popupName = popup.querySelector('.popup__input_info_name');
let popupProfession = popup.querySelector('.popup__input_info_profession');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = popup.querySelector('.popup__container');

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
