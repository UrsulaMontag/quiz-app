import Bookmark from '../bookmark/bookmark.js';
import Button from '../button/button.js';

export default function CardQuestions(questionData) {
  const cardsContainer = document.querySelector('[data-js="home"]');
  cardsContainer.ariaBusy = 'true';

  questionData.forEach((dataItem, id) => {
    const questionCard = document.createElement('article');
    questionCard.className = 'card';

    questionCard.innerHTML = `
    <button class="card__bookmark${
      dataItem.isBookmarked ? ' card__bookmark--active' : ''
    }" aria-label="Bookmark" aria-pressed="${
      dataItem.isBookmarked ? 'true' : 'false'
    }" data-js="bookmark1">
      </button>
  
    <h2 class="card__headline-2">Question</h2>
    <p class="card__question" data-js="question">
      ${dataItem.question}
    </p>
    <button class="button button__big" data-js="buttonCard" aria-controls="answer${id}"
    aria-expanded="false">Toggle Answer</button>
    </button>
    <p class="card__answer" data-js="answer" id="answer${id}" hidden>
      ${dataItem.correct_answer}
    </p>

      `;
    cardsContainer.append(questionCard);

    // if (dataItem.type === 'multiple') {
    //   const questionChoice = dataItem.querySelector('[data-js="question"]');
    //   const choice = document.createElement('ul');
    //   choice.className = 'card__answer--choicelist';
    //   choice.ariaLabel = 'Choose one before toggling answer';
    //   choice.innerHTML = `<legend>Filter by tags:</legend>`;

    //   const answerChoices = [
    //     dataItem.correct_answer,
    //     ...dataItem.incorrect_answers,
    //   ];

    //   answerChoices.forEach(answerChoice => {
    //     const button = document.createElement('li');
    //     button.className = 'card__answer--choicebutton';
    //     button.innerHTML = `
    //       <label class="tag-label" for="${answerChoice}">${answerChoice}</label>
    //       <input name="tag-filter" value="${answerChoice}" class="tag-input" id="${answerChoice}" type="radio">
    //     `;
    //     choice.append(button);
    //     questionChoice.append(choice);
    //   });
    // }

    const listElement = document.createElement('ul');
    listElement.className = 'card__footer-box';
    const tagOne = dataItem.category.split(':')[1];
    dataItem.tags = [tagOne, dataItem.type, dataItem.difficulty];
    dataItem.tags.forEach(tag => {
      const tagItem = document.createElement('li');
      tagItem.className = 'card__footer-tag';

      tagItem.textContent = tag;
      listElement.append(tagItem);
      questionCard.append(listElement);
    });
    cardsContainer.append(questionCard);
  });

  const Cards = document.querySelectorAll('.card');
  Cards.forEach(card => {
    const answerButton = card.querySelector('[data-js="buttonCard"]');
    Button(answerButton);
    Bookmark(card);
  });

  cardsContainer.ariaBusy = 'false';
}
