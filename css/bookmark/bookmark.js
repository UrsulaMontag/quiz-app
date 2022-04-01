export default function Bookmark() {
  const bookmark = document.querySelector('[data-js="bookmark1"]');
  console.log(bookmark);

  const bookmarkActive = document.querySelector('[data-js="bookmark2"]');

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("hidden");
    bookmarkActive.classList.toggle("hidden");
  });

  bookmarkActive.addEventListener("click", () => {
    bookmarkActive.classList.toggle("hidden");
    bookmark.classList.toggle("hidden");
  });
}
