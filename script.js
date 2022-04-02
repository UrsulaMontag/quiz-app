import Button from "./css/button/button.js";
import Bookmark from "./css/bookmark/bookmark.js";

const Cards = document.querySelectorAll(".card");
const Buttons = document.querySelectorAll(".button");

Cards.forEach((card) => {
  Bookmark(card);
});

Buttons.forEach((element) => {
  Button(element);
});
