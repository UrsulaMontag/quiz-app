import Bookmark from '../bookmark/bookmark.js';
import Button from '../button/button.js';

export default function CardQuestions(questionData) {
  const cardsContainer = document.querySelector('[data-js="home"]');
  cardsContainer.ariaBusy = 'true';
  //cardsContainer.innerHTML = '';

  questionData.forEach((dataItem, id) => {
    const questionCard = document.createElement('article');
    questionCard.className = 'card';

    //questionCard.setAttribute('[data-js="card"]');
    console.log(questionCard);
    questionCard.innerHTML = `
  <header class="card__header-box">
  <button class="card__header-bookmark${
    dataItem.isBookmarked ? 'card__header-bookmark--active' : ''
  }" aria-label="Bookmark" aria-pressed="${
      dataItem.isBookmarked ? 'true' : 'false'
    }" data-js="bookmark1">
      </button>
  
  <h2 class="card__header-headline-2">Question</h2>
</header>
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
    const answerButton = card.querySelector('[data-js="buttonCard"]');
    Button(answerButton);
    Bookmark(card);
  });

  cardsContainer.ariaBusy = 'false';
}
