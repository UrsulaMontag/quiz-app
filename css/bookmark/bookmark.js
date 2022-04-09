export default function Bookmark(cardElement) {
  const bookmark = cardElement.querySelector('[data-js="bookmark1"]');
  bookmark.addEventListener('click', () => {
    cardElement.isBookmarked = !cardElement.isBookmarked;
    bookmark.classList.toggle('card__header-bookmark--active');
    bookmark.setAttribute('aria-pressed', cardElement.isBookmarked);
  });
}
