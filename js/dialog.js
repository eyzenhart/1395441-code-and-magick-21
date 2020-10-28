'use strict';

var userNameInput = document.querySelector('.setup-user-name');
var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = document.querySelector('.setup-close');


var onPopupEscPress = function(evt) {
  window.util.isEscEvent(evt, closePopup);
};


var openPopup = function() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};


var closePopup = function() {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


userDialogOpen.addEventListener('click', function(evt) {
  openPopup();
});


userDialogOpen.addEventListener('keydown', function(evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});


userDialogClose.addEventListener('click', function() {
  closePopup();
});


userDialogClose.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, closePopup);
});
