const likeButtons = document.querySelectorAll('.card__icon-button');
const saveButtons = document.querySelectorAll('.card__like-button');
const footerSaveButton = document.querySelector('.footer__save-button');
const dialog = document.querySelector('.dialog');
const dialogCloseButton = document.querySelector('.dialog__button');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('.like-icon');
    if (icon) {
      icon.classList.toggle('is-liked');
    }
  });
});

const openDialog = () => {
  if (dialog) {
    dialog.showModal();
  }
};

saveButtons.forEach((button) => {
  button.addEventListener('click', openDialog);
});

if (footerSaveButton) {
  footerSaveButton.addEventListener('click', openDialog);
}

if (dialogCloseButton) {
  dialogCloseButton.addEventListener('click', () => {
    dialog.close();
  });
}
