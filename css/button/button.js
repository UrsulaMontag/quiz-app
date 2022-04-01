export default function ButtonCard() {
  const buttonShow = document.querySelector('[data-js="buttonShow"]');
  const buttonHide = document.querySelector('[data-js="buttonHide"]');
  const answer = document.querySelector('[data-js="answer"]');

  buttonShow.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    buttonShow.classList.toggle("hidden");
    buttonHide.classList.toggle("hidden");
  });

  buttonHide.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    buttonShow.classList.toggle("hidden");
    buttonHide.classList.toggle("hidden");
  });
}
