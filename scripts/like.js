document.addEventListener('DOMContentLoaded', function() {
  const likeButtons = document.querySelectorAll('.card__icon-button');
  const saveButtons = document.querySelectorAll('.card__like-button');
  const footerSaveButton = document.querySelector('.footer__save-button');
  const dialog = document.querySelector('.dialog');
  const dialogCloseButton = document.querySelector('.dialog__button');

  likeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const icon = button.querySelector('.like-icon');
      if (icon) {
        icon.classList.toggle('is-liked');
      }
    });
  });

  if (dialog) {
    const openDialog = function() {
      dialog.showModal();
    };

    saveButtons.forEach(function(button) {
      button.addEventListener('click', openDialog);
    });

    if (footerSaveButton) {
      footerSaveButton.addEventListener('click', openDialog);
    }

    if (dialogCloseButton) {
      dialogCloseButton.addEventListener('click', function() {
        dialog.close();
      });
    }
  }
});
