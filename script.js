import CardData from './css/card/cardData.js';
import Nav from './css/nav/nav.js';

// //const Cards = document.querySelectorAll(".card");

const navButtons = document.querySelectorAll('.buttonSite');
console.log(navButtons);
navButtons.forEach(navButton => {
  Nav(navButton);
});

const urlApi =
  'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
CardData(urlApi);
console.log(CardData);
