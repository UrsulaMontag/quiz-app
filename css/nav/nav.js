export default function Nav(navElement) {
  const home = document.querySelector('[data-js="home"]');
  const bookmark = document.querySelector('[data-js="bookmark"]');
  console.log(bookmark);
  const create = document.querySelector('[data-js="form"]');
  const profile = document.querySelector('[data-js="profile"]');
  navElement.addEventListener('click', () => {
    if (navElement.getAttribute('data-js') === 'navBookmark') {
      home.classList.add('hidden');
      bookmark.classList.remove('hidden');
      create.classList.add('hidden');
      profile.classList.add('hidden');
    } else if (navElement.getAttribute('data-js') === 'navCreate') {
      home.classList.add('hidden');
      bookmark.classList.add('hidden');
      create.classList.remove('hidden');
      profile.classList.add('hidden');
    } else if (navElement.getAttribute('data-js') === 'navProfile') {
      home.classList.add('hidden');
      bookmark.classList.add('hidden');
      create.classList.add('hidden');
      profile.classList.remove('hidden');
    } else if (navElement.getAttribute('data-js') === 'navHome') {
      home.classList.remove('hidden');
      bookmark.classList.add('hidden');
      create.classList.add('hidden');
      profile.classList.add('hidden');
    }
  });
}
