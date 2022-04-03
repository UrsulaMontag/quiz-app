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
    } else if (buttonElement.getAttribute("data-js") === "navBookmark") {
      console.log(buttonElement);
      document.querySelector('[data-js = "home"]').classList.add("hidden");
      document
        .querySelector('[data-js = "bookmark"]')
        .classList.remove("hidden");
      document.querySelector('[data-js = "create"]').classList.add("hidden");
      document.querySelector('[data-js = "profile"]').classList.add("hidden");
    } else if (buttonElement.getAttribute("data-js") === "navCreate") {
      document.querySelector('[data-js = "home"]').classList.add("hidden");
      document.querySelector('[data-js = "bookmark"]').classList.add("hidden");
      document.querySelector('[data-js = "create"]').classList.remove("hidden");
      document.querySelector('[data-js = "profile"]').classList.add("hidden");
    } else if (buttonElement.getAttribute("data-js") === "navHome") {
      document.querySelector('[data-js = "home"]').classList.remove("hidden");
      document.querySelector('[data-js = "bookmark"]').classList.add("hidden");
      document.querySelector('[data-js = "create"]').classList.add("hidden");
      document.querySelector('[data-js = "profile"]').classList.add("hidden");
    }
  });
}
