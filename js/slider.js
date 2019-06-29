'use strict';

// Слайдер

(function () {
  var INDENT_LEFT = 68;
  var loadPicture;
  var effectVal;
  var effectPin;
  var effectDepth;
  var maxRightPx;
  var minLeftPx;
  var dragging = false;
  var effectValue;

  window.fillValues = function () {
    loadPicture = window.form.loadPicture;
    effectVal = document.querySelector('.effect-level__value');
    effectPin = window.form.effectPin;
    effectDepth = window.form.effectDepth;

    minLeftPx = parseInt(document.querySelector('.img-upload__wrapper').offsetLeft + INDENT_LEFT, 10);
    maxRightPx = parseInt(minLeftPx + document.querySelector('.effect-level__line').offsetWidth, 10);

    window.addEventListener('mouseup', function () {
      dragging = false;
    });

    effectPin.addEventListener('mousedown', function () {
      dragging = true;
    });

    window.addEffectsActions();
  };

  window.slider = {
    effectValue: effectValue
  }
  function handleSlider(mouseX) {
    if (dragging && mouseX >= minLeftPx && mouseX <= maxRightPx) {
      var offset = Math.floor(mouseX - minLeftPx);
      var width = maxRightPx - minLeftPx;
      effectValue = Math.floor((offset * 100) / width);
      effectPin.style.left = effectValue + '%';
      effectDepth.style.width = effectValue + '%';
      effectVal.value = effectValue;
      window.applyEffectDepth();
    }
  }

  window.addEventListener('mousemove', function (evt) {
    handleSlider(evt.clientX);
  });
})();

