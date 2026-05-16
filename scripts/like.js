const likeButtons = document.querySelectorAll('.card__icon-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.like-icon');
    if (icon) {
      icon.classList.toggle('is-liked');
    }
  });
});
