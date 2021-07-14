export {util};

const number = randomAvatar(1, 10);

const offer = {
  author: {
    avatar:'img/avatars/user10.png',
  },
  offer: {
    title: 'Заказ квартир',
    addess: '55,52',
    price: 1000,
    type: 'house',
    rooms: 2,
    guests: 4,
    checkin: '14:00',
    checkout: '12:00',
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'Просторые комнаты',
    photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg", "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg", "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
  },
  location: {
    lat: 35.65000,
    lng: 139.70000,
  },
};

const accound = 10;

const similarWizards = new Array(accound).fill(null).map(() => offer);
