export default function Nav(navElement) {
  navElement.addEventListener('click', () => {
    if (navElement.getAttribute('data-js') === 'navBookmark') {
      document.querySelector('[data-js="home"]').classList.add('hidden');
      document.querySelector('[data-js="bookmark"]').classList.remove('hidden');
      document.querySelector('[data-js="form"]').classList.add('hidden');
      document.querySelector('[data-js="profile"]').classList.add('hidden');
    } else if (navElement.getAttribute('data-js') === 'navCreate') {
      document.querySelector('[data-js="home"]').classList.add('hidden');
      document.querySelector('[data-js="bookmark"]').classList.add('hidden');
      document.querySelector('[data-js="form"]').classList.remove('hidden');
      document.querySelector('[data-js="profile"]').classList.add('hidden');
    } else if (navElement.getAttribute('data-js') === 'navProfile') {
      document.querySelector('[data-js="home"]').classList.add('hidden');
      document.querySelector('[data-js="bookmark"]').classList.add('hidden');
      document.querySelector('[data-js="form"]').classList.add('hidden');
      document.querySelector('[data-js="profile"]').classList.remove('hidden');
    } else if (navElement.getAttribute('data-js') === 'navHome') {
      document.querySelector('[data-js="home"]').classList.remove('hidden');
      document.querySelector('[data-js="bookmark"]').classList.add('hidden');
      document.querySelector('[data-js="form"]').classList.add('hidden');
      document.querySelector('[data-js="profile"]').classList.add('hidden');
    }
  });
}
