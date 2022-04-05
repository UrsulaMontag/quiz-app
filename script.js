import CardQuestions from "./css/card/cardData.js";
import Nav from "./css/nav/nav.js";

// //const Cards = document.querySelectorAll(".card");

const navButtons = document.querySelectorAll(".buttonSite");
console.log(navButtons);
navButtons.forEach((navButton) => {
  Nav(navButton);
});

CardQuestions();
