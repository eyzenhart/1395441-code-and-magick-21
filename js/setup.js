'use strict';

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardList = document.querySelector('.setup-similar-list');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];


userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');


var getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// Этот код не работает

// var getWizards = function () {
//   for (var i = 0; i <= 4; i++) {
//     var wizardElement = similarWizardTemplate.cloneNode(true);
//     wizardElement.querySelector('.setup-similar-label').textContent = names[getRandomInt(8)] + ' ' + surnames[getRandomInt(8)];
//     wizardElement.querySelector('.wizard-coat').style.fill = coat[getRandomInt(6)];
//     wizardElement.querySelector('.wizard-eyes').style.fill = eyes[getRandomInt(5)];
//     wizards = wizards + wizardElement[i];
//   }
//   return wizards;
// }

// var fragment = document.createDocumentFragment();
// for (var j = 0; j < wizards.length; j++) {
//   fragment.appendChild(getWizards(wizards[i]));
// }

// similarWizardList.appendChild(fragment);


// А этот работает

var getWizards = function() {
  for (var i = 0; i <= 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    similarWizardList.appendChild(wizardElement);

    wizardElement.querySelector('.setup-similar-label').textContent = names[getRandomInt(8)] + ' ' + surnames[getRandomInt(8)];
    wizardElement.querySelector('.wizard-coat').style.fill = coat[getRandomInt(6)];
    wizardElement.querySelector('.wizard-eyes').style.fill = eyes[getRandomInt(5)];
  }
};

getWizards();


