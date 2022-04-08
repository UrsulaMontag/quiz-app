import Button from '../button/button.js';
import Bookmark from '../bookmark/bookmark.js';

export default function CardQuestions(questionData) {
  const cardsContainer = document.querySelector('[data-js="home"]');

  questionData.forEach(dataItem => {
    const questionCard = document.createElement('article');

    questionCard.classList.add('card');

    questionCard.innerHTML = `
  <header class="card__header-box">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
    class="card__header-bookmark"
    data-js="bookmark1"
    aria-labelledby="ariaTitleBookmark1"
  >
    <title id="ariaTitleBookmark1">Mark your favorite questions</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
    class="card__header-bookmark hidden"
    data-js="bookmark2"
    aria-labelledby="ariaTitleBookmark2"
  >
    <title id="ariaTitleBookmark2">
      Unmark the questions you no longer need
    </title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>

  <h2 class="card__header-headline-2">Question</h2>
</header>
<p class="card__question" data-js="question">
  ${dataItem.question}
</p>
<button class="button button__big" data-js="buttonCard">SHOW ANSWER</button>
</button>
<p class="card__answer hidden" data-js="answer">
  ${dataItem.correct_answer}
</p>

      `;
    cardsContainer.append(questionCard);

    const listElement = document.createElement('ul');
    listElement.className = 'card__footer-box';

    dataItem.tags = [dataItem.category, dataItem.type, dataItem.difficulty];
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
    Bookmark(card);
    const answerButton = card.querySelector('[data-js="buttonCard"]');
    Button(answerButton);
  });
}
