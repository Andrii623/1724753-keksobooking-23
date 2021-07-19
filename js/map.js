const cardTemplate = document.querySelector('#card').content.querySelector('.popup')
const cardElement = card.cloneNode(true);
cardListElement.appendChild(cardElement);

const offer.type  = {
  house: 'Дом',
  palace: 'Дворец',
  flat: 'Квартира',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const getPhotos = (box, images) => {
  const popupPhoto = box.querySelector('.popup__photo');
    box.innerHTML = '';
const fragmentPhoto = document.createDocumentFragment();
images.forEach((image) => {
const newImage = popupPhoto.cloneNode(true);
newImage.src = image;
fragmentPhoto.appendChild(newImage);
});

return fragmentPhoto;
};

const makeOffer = function({ author, offer }) {

const clonedPopup = popup.cloneNode(true);

const popupTitle = clonedPopup.querySelector('.popup__title');
if(offer.title) {
    popupTitle.textContent = offer.title;
} else {
    popupTitle.remove();
}

const popupAddress = clonedPopup.querySelector('.popup__text--address');
if(offer.address) {
    popupAddress.textContent = offer.address;
} else {
    popupAddress.remove();
}

const popupPrice = clonedPopup.querySelector('.popup__text--price');
if(offer.price) {
    popupPrice.textContent = `${offer.price  } ₽/ночь`;
} else {
    popupPrice.remove();
}

const popupType = clonedPopup.querySelector('.popup__type');
if (offer.type) {
    popupType.textContent = typeOfRealty[offer.type];
} else {
    popupType.remove();
}

const popupRoomsAndGuests = clonedPopup.querySelector('.popup__text--capacity');
if(offer.rooms && offer.guests) {
    popupRoomsAndGuests.textContent = `${offer.rooms   } комнаты для ${   offer.guests  } гостей`;
}  else {popupRoomsAndGuests.remove();}

const popupTime = clonedPopup.querySelector('.popup__text--time');
if(offer.checkin && offer.checkout) {
    popupTime.textContent = `Заезд после ${  offer.checkin  } выезд до ${  offer.checkout}`;
} else {
    popupTime.remove();
}

const popupFeatures = clonedPopup.querySelector('.popup__features');

const popupDescription = clonedPopup.querySelector('.popup__description');
if(offer.description) {
    popupDescription.textContent = offer.description;
} else {
    popupDescription.remove();
}

const popupPhotos = clonedPopup.querySelector('.popup__photos');
if(offer.photos) {
    popupPhotos.appendChild(getPhotos(popupPhotos, offer.photos));
} else {
    popupPhotos.remove();
}

const popupAvatar = clonedPopup.querySelector('.popup__avatar');
if(author.avatar) {
    popupAvatar.src = author.avatar;
} else {
    popupAvatar.remove();
}
return clonedPopup;
};
