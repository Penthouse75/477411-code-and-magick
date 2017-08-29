'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

/*
 * Open/Close Setup dialog
 */
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

/*
 * Tuning main wizard
 */
var wizardMainCoat = document.querySelector('.wizard-coat');

wizardMainCoat.addEventListener('click', function() {
  var wizardMain = setup.querySelector('.wizard');
  wizardMain.querySelector('.wizard-coat').style.fill = generateWizardCoatColor();
});

/*
 * Event handler
 */
var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardMainCoat.removeEventListener('click');
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt){
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

/*
 * Tuning Setup dialog
 */
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (!userNameInput.validity.valid) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    }
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('');
  } else {
    target.setCustomValidity('');
  }
});
/*
 * Create wizard
 */
var similarListElement = setup.querySelector('.setup-similar-list');

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

/*
 * Show wizard
 */
setup.querySelector('.setup-similar').classList.remove('hidden');