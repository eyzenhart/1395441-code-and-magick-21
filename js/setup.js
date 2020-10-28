'use strict';

var similarWizardList = document.querySelector('.setup-similar-list');
var WIZARDS_NUMBER = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

document.querySelector('.setup-similar').classList.remove('hidden');

//настройка персонажа

(function() {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardCoatHidden = document.querySelector('input[name = "coat-color"]');
  var wizardEyesHidden = document.querySelector('input[name = "eyes-color"]');
  var wizardFireballHidden = document.querySelector('input[name = "fireball-color"]');

  window.colorize(wizardCoat, wizardCoatHidden, coats);
  window.colorize(wizardEyes, wizardEyesHidden, eyes);
  window.colorize(wizardFireball, wizardFireballHidden, fireballs);
})();


//отрисовка похожих магов
var wizardsData = window.render.createWizardsData(WIZARDS_NUMBER);
var wizardElements = window.render.createWizardElements(wizardsData);

var fragment = document.createDocumentFragment();
wizardElements.forEach(function(item) {
  similarWizardList.appendChild(item);
});

similarWizardList.appendChild(fragment);
