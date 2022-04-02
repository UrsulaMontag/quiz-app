export default function Button(buttonElement) {
  const answerList = document.querySelectorAll('[data-js="answer"]');
  const buttonCardList = buttonElement.querySelectorAll(".button__big");

  const buttonLogout = buttonElement.querySelector(
    '[data-js= "button__logout"]'
  );
  let loggedIn = true;
  const buttonSubmit = buttonElement.querySelector(
    '[data-js= "button__submit"]'
  );

  buttonElement.addEventListener("click", () => {
    if (buttonCardList) {
      answerList.forEach((answer) => {
        answer.classList.toggle("hidden");
      });
      buttonCardList.forEach((button) => {
        button.classList.toggle("hidden");
      });
    } else if (buttonLogout) {
      loggedIn = !loggedIn;
      loggedIn
        ? (buttonLogout.textContent = "Logout")
        : (buttonLogout.textContent = "Login");
    }
  });
}
