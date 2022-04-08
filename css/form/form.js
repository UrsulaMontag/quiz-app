export default function Create() {
  const create = document.querySelector('[data-js="createForm"]');

  create.addEventListener('submit', event => {
    event.preventDefault();

    const questionElement = create.elements.question;
    console.log(questionElement);
    const answerElement = create.elements.answer;
    const tagsElement = create.elements.tags;
  });
}
