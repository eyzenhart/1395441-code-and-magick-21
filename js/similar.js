'use strict';

(function() {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  window.render = {

    createWizardsData: function(number) {
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
    },


    createWizardElements: function(data) {
      var wizardElements = [];
      data.forEach(function(item) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = item.name;
        wizardElement.querySelector('.wizard-coat').style.fill = item.coat;
        wizardElement.querySelector('.wizard-eyes').style.fill = item.eyes;
        wizardElements.push(wizardElement);
      });
      return wizardElements;
    }
  }
})();
