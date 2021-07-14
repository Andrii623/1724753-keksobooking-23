function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const fruits = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

fruits.forEach((value, index, array) => {
  console.log(value);
});

// Выведет:
// 01
// 02
// 03
// 04
// 05
// 06
// 07
// 08
// 09
// 10

function randomAvatar(min, max) {
  let randomNumber = randomInteger (min, max)
  return randomNumber
}
let number = randomAvatar(1, 10)
console.log (number)

const offer = {
  author: {
    avatar:"img/avatars/user10.png"
  },
  offer: {
    title: "Заказ квартир",
    addess: "55,52",
    price: 1000,
    type: "house",
    rooms: 2,
    guests: 4,
    checkin: "14:00",
    checkout: "12:00",
    features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    description: "Просторые комнаты",
    photos: ["https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg", "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg", "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"]
  },
  location: {
      lat: 35.65000,
      lng: 139.70000,
     },
  }
let accound = 10;
const similarWizards = new Array(accound).fill(null).map(() => offer);

console.log(similarWizards);

console.log ("img/avatars/user"+ number +".png")

