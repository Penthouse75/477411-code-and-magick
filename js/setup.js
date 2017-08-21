'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var generateWizardName = function () {
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  return WIZARD_FIRST_NAMES[parseInt(Math.random() * WIZARD_FIRST_NAMES.length)] + ' ' + WIZARD_LAST_NAMES[parseInt(Math.random() * WIZARD_LAST_NAMES.length)];
}

var generateWizardCoatColor = function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  return WIZARD_COAT_COLOR[parseInt(Math.random() * WIZARD_COAT_COLOR.length)];
}

var generateWizardEyesColor = function () {
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  return WIZARD_EYES_COLOR[parseInt(Math.random() * WIZARD_EYES_COLOR.length)];
}

var wizards = [
  {
    name: generateWizardName(),
    coatColor: generateWizardCoatColor(),
    eyesColor: generateWizardEyesColor()
  },
  {
    name: generateWizardName(),
    coatColor: generateWizardCoatColor(),
    eyesColor: generateWizardEyesColor()
  },
  {
    name: generateWizardName(),
    coatColor: generateWizardCoatColor(),
    eyesColor: generateWizardEyesColor()
  },
  {
    name: generateWizardName(),
    coatColor: generateWizardCoatColor(),
    eyesColor: generateWizardEyesColor()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
