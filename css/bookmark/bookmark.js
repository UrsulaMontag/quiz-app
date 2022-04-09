export default function Bookmark(cardElement) {
  const bookmark = cardElement.querySelector('[data-js="bookmark1"]');
  bookmark.addEventListener('click', () => {
    cardElement.isBookmarked = !cardElement.isBookmarked;
    bookmark.classList.toggle(' card__bookmark--active');
    bookmark.setAttribute('aria-pressed', cardElement.isBookmarked);
  });
}
