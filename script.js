import CardData from './css/card/cardData.js';
import Nav from './css/nav/nav.js';
import Create from './css/form/form.js';

const navButtons = document.querySelectorAll('.buttonSite');
navButtons.forEach(navButton => {
  Nav(navButton);
});

const urlApi =
  'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
CardData(urlApi);

Create();
