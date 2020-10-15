'use strict';

var WIZARDS_NUMBER = 4;

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardList = document.querySelector('.setup-similar-list');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatHidden = document.querySelector('input[name = "coat-color"]');
var wizardEyesHidden = document.querySelector('input[name = "eyes-color"]');
var wizardFireballHidden = document.querySelector('input[name = "fireball-color"]');




var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


document.querySelector('.setup-similar').classList.remove('hidden');

var componentFromStr = function(numStr, percent) {
  var num = Math.max(0, parseInt(numStr, 10));
  return percent ?
      Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

var rgbToHex = function(rgb) {
  var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
  var result, r, g, b, hex = "";
  if ( (result = rgbRegex.exec(rgb)) ) {
      r = componentFromStr(result[1], result[2]);
      g = componentFromStr(result[3], result[4]);
      b = componentFromStr(result[5], result[6]);

      hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return hex;
}

// var isFocused = (document.activeElement === userNameInput);

// var checkFocus = document.hasFocus(userNameInput);

// console.log(checkFocus);

var onPopupEscPress = function(evt) {
  if (evt.key === 'Escape' && document.activeElement !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
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
  if (evt.key === 'Enter') {
    closePopup();
  }
});


wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = coats[getRandomInt(coats.length)];
  wizardCoatHidden.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = eyes[getRandomInt(eyes.length)];
  wizardEyesHidden.value = wizardEyes.style.fill;

});

wizardFireball.addEventListener('click', function() {
  wizardFireball.style.backgroundColor = fireballs[getRandomInt(fireballs.length)];

  wizardFireballHidden.value = rgbToHex(wizardFireball.style.backgroundColor);
});


var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};


var createWizardsData = function(number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    var wizard = {
      coat: coats[getRandomInt(coats.length)],
      eyes: eyes[getRandomInt(eyes.length)],
      name: names[getRandomInt(names.length)] + ' ' + surnames[getRandomInt(surnames.length)]
    };
    wizards.push(wizard);
  }
  return wizards;
};


var createWizardElements = function(data) {
  var wizardElements = [];
  data.forEach(function(item) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = item.name;
    wizardElement.querySelector('.wizard-coat').style.fill = item.coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = item.eyes;
    wizardElements.push(wizardElement);
  });
  return wizardElements;
};


// создаем данные
var wizardsData = createWizardsData(WIZARDS_NUMBER);

//создаем элементы
var wizardElements = createWizardElements(wizardsData);

//отрисовываем элементы
var fragment = document.createDocumentFragment();
  wizardElements.forEach(function(item, index, array) {
    similarWizardList.appendChild(item);
  });

  similarWizardList.appendChild(fragment);


