export default function Button(buttonElement) {
  buttonElement.addEventListener("click", () => {
    if (buttonElement.getAttribute("data-js") === "buttonCard") {
      const parentCard = buttonElement.parentElement;
      console.log(parentCard);
      const answerElement = parentCard.querySelector('[data-js="answer"]');
      answerElement.classList.toggle("hidden");
      answerElement.classList.contains("hidden")
        ? (buttonElement.textContent = "Show Answer")
        : (buttonElement.textContent = "Hide Answer");
    } else if (buttonElement.getAttribute("data-js") === "buttonLogout") {
      buttonElement.textContent === "Login"
        ? (buttonElement.textContent = "Logout")
        : (buttonElement.textContent = "Login");
    }
  });
}
