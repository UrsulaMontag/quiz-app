export default function Bookmark(bookmarkElement) {
  const bookmark = bookmarkElement.querySelector('[data-js="bookmark1"]');

  const bookmarkActive = bookmarkElement.querySelector('[data-js="bookmark2"]');

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("hidden");
    bookmarkActive.classList.toggle("hidden");
  });

  bookmarkActive.addEventListener("click", () => {
    bookmarkActive.classList.toggle("hidden");
    bookmark.classList.toggle("hidden");
  });
}
