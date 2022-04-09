export default function Button(buttonElement) {
  buttonElement.addEventListener('click', () => {
    if (buttonElement.getAttribute('data-js') === 'buttonCard') {
      const parentCard = buttonElement.parentElement;
      const answerElement = parentCard.querySelector('[data-js="answer"]');
      answerElement.toggleAttribute('hidden');
      const oldExpandedState = buttonElement.getAttribute('aria-expanded');
      const newExpandedState = oldExpandedState === 'true' ? 'false' : 'true';
      buttonElement.setAttribute('aria-expanded', newExpandedState);
    } else if (buttonElement.getAttribute('data-js') === 'buttonLogout') {
      buttonElement.textContent === 'Login'
        ? (buttonElement.textContent = 'Logout')
        : (buttonElement.textContent = 'Login');
    }
  });
}
