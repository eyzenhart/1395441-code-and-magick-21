'use strict';

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardList = document.querySelector('.setup-similar-list');

var WIZARDS_NUMBER = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];


userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');


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


var renderWizards = function(elements) {
  elements.forEach(function(item, index, array) {
    similarWizardList.appendChild(item);
  });
};


// создаем данные
var wizardsData = createWizardsData(WIZARDS_NUMBER);

//создаем элементы
var wizardElements = createWizardElements(wizardsData);

//отрисовываем элементы
renderWizards(wizardElements);



