
console.log('hallo');

//Switch visibility of bookmark acitve-inactive

const bookmark = document.querySelector('[data-js="bookmark1"]');
console.log(bookmark);

const bookmarkActive = document.querySelector('[data-js="bookmark2"]');

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("hidden")
    bookmarkActive.classList.toggle("hidden")
})

bookmarkActive.addEventListener("click", () => {
    bookmarkActive.classList.toggle("hidden")
    bookmark.classList.toggle("hidden")
    
})


const buttonShow = document.querySelector('[data-js="buttonShow"]');
console.log(bookmark);
const buttonHide = document.querySelector('[data-js="buttonHide"]');
const answer = document.querySelector('[data-js="answer"]')

buttonShow.addEventListener("click", () => {
    answer.classList.toggle("hidden")
    buttonShow.classList.toggle("hidden")
    buttonHide.classList.toggle("hidden")

})

buttonHide.addEventListener("click", () => {
    answer.classList.toggle("hidden")
    buttonShow.classList.toggle("hidden")
    buttonHide.classList.toggle("hidden")

})
