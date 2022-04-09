import CardQuestions from '../card/card.js';

export default function Create() {
  const create = document.querySelector('[data-js="createForm"]');

  let questionCards = document.querySelectorAll('.card');

  create.addEventListener('submit', event => {
    event.preventDefault();

    const questionElement = create.elements.question;
    const answerElement = create.elements.correct_answer;
    const tagsElement = create.elements.tags;

    const newQuestionCard = {
      question: questionElement.value,
      answer: answerElement.value,
      tags: tagsElement.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.legth),
    };

    questionCards = [newQuestionCard, ...questionCards];
    CardQuestions(questionCards);
  });
}
