// Go up effect Landing/aside
document.querySelector('.btn-up').addEventListener('click', function () {
  window.scrollTo(0, 0);
});

// Sliders initial settings
const root = document.documentElement;
const slides = document.querySelectorAll('.slider-card');
const reviews = document.querySelectorAll('.review-card');

slides.forEach((e) => {
  e.style.setProperty('grid-column', `${e.dataset.column}`);
});

reviews.forEach((e, i) => e.style.order = i + 1);

root.style.setProperty('--shift', '0px');
root.style.setProperty('--review-shift', '0px');
let sliderButtonDisabler = false;
let reviewSliderButtonDisabler = false;


// Pets slider
window['famous-pets'].querySelector('.direction-buttons').addEventListener('click', (event) => {
  if (event.target.tagName !== 'DIV' && !sliderButtonDisabler) {
    const slidingSettings = setSlides();
    const button = event.target.tagName === 'BUTTON' ? event.target : event.target.closest('button');
    moveSlides(button, slidingSettings);
  }
});

function moveSlides(button, slidingSettings, type = 'grid', auto = true) {
  const { width, amount } = slidingSettings;
  const str = type === 'grid' ? '' : 'review-';
  if (button.classList.contains('left')) {
    //LEFT
    auto && (sliderButtonDisabler = true);
    animateMoveSlides(0, -1 * width * amount, str);
    changeSlidesOrder(slidingSettings, 'left', type);
    setTimeout(() => { animateMoveSlides(1000, 0, str); }, 50);
    setTimeout(() => { sliderButtonDisabler = false; }, 1001);
  }
  // RIGHT
  if (button.classList.contains('right')) {
    auto && (sliderButtonDisabler = true);
    animateMoveSlides(1000, -1 * width * amount, str);
    setTimeout(() => {
      changeSlidesOrder(slidingSettings, 'right', type);
      animateMoveSlides(0, 0, str);
      sliderButtonDisabler = false;
    }, 1001);
  }
}

function changeSlidesOrder(slidingSettings, direction, type) {
  if (type === 'grid') {
    const columns = slides.length / 2;
    slides.forEach((e) => {
      let curColumn = +e.dataset.column;
      if (direction === 'right') {
        if (curColumn < slidingSettings.amount + 1) curColumn += columns;
        curColumn -= slidingSettings.amount;
      }
      if (direction === 'left') {
        curColumn += slidingSettings.amount;
        if (curColumn > columns) curColumn -= columns;
      }
      e.dataset.column = curColumn;
      e.style.setProperty('grid-column', `${e.dataset.column}`);
    });
  }
  if (type === 'review') {
    reviews.forEach((e, i, arr) => {
      const order = +e.style.order;
      if (direction === 'left') {
        e.style.order++;
        if (+e.style.order > arr.length) e.style.order = 1;
      }
      if (direction === 'right') {
        if (+e.style.order === 1) e.style.order = arr.length;
        else e.style.order--;
      }
    });
  }
  return;
}

function animateMoveSlides(time, shift, str = '') {
  root.style.setProperty(`--${str}time`, `${time}ms`);
  root.style.setProperty(`--${str}shift`, `${shift}px`);
  return;
}

function setSlides() {
  const resolution = document.body.offsetWidth;
  switch (true) {
    case resolution >= 1920: return {
      width: 368,
      amount: 1, // MUST BE 3, BUT AMOUNT OF SLIDES MUST BE 6+
    };
    case resolution >= 1200: return {
      width: 288,
      amount: 2,
    };
    case resolution >= 640: return {
      width: 210,
      amount: 1, // MUST BE 3, BUT AMOUNT OF SLIDES MUST BE 6+
    };
    default: return {
      width: 160,
      amount: 2,
    };
  }
}

// Feedback popup
const feedbackPopup = document.querySelector('.feedback-popup-container');
const inputs = Array.from(feedbackPopup.querySelectorAll('input'));
const sendFeedButton = feedbackPopup.querySelector('button');
inputs.push(feedbackPopup.querySelector('textarea'));
document.querySelector('.testimonial').querySelector('button').addEventListener('click', () => {
  feedbackPopup.classList.toggle('feedback-hidden');

  inputs.forEach((e) => {
    e.addEventListener('focusout', inputHandler);
    e.addEventListener('input', validCheck);
  });
});
// Close popup
feedbackPopup.addEventListener('click', (event) => {
  if (event.target.matches('.close')) clearForm();
});
feedbackPopup.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('feedback-popup-container')) clearForm();
});
sendFeedButton.addEventListener('click', () => {
  if (!sendFeedButton.disabled) clearForm();
  setTimeout(function () {
    alert('Thank you for your feedback!');
  }, 150);
});

feedbackPopup.querySelector('textarea').addEventListener('input', function () {
  switch (true) {
    case this.value.length < 15:
      showError(this);
      this.nextElementSibling.textContent = 'Review must be longer than 15 characters.';
      break;
    case this.value.length > 280:
      showError(this);
      this.nextElementSibling.textContent = 'Review must be longer than 280 characters.';
      break;
    default: hideError(this);
      break;
  }
});

function clearForm() {
  feedbackPopup.classList.toggle('feedback-hidden');
  inputs.forEach((e) => {
    e.value = '';
    e.dataset.valid = false;
    e.nextElementSibling.classList.add('error-hide');
    sendFeedButton.classList.add('btn_disabled');
    sendFeedButton.disabled = true;
  });
}

function inputHandler(event) {
  const input = event.target;
  if (input.matches('textarea')) {

  }
  else {
    if (input.matches('[type="name"]')) {
      input.value.length > 1 ? hideError(input) : showError(input);
    }
    if (input.matches('[type="email"]')) {
      /[a-z0-9\.\-]*@[a-z]*\.[a-z]{2,3}/i.test(input.value) ? hideError(input) : showError(input);
    }
  }
}

function showError(input) {
  input.nextElementSibling.classList.remove('error-hide');
}
function hideError(input) {
  input.nextElementSibling.classList.add('error-hide');
}

function validCheck() {
  const isValid = inputs[0].value.length > 1
    && /[a-z0-9\.\-]*@[a-z]*\.[a-z]{2,3}/i.test(inputs[1].value)
    && inputs[2].value.length > 15
    && inputs[2].value.length < 280;
  if (isValid) sendFeedButton.classList.remove('btn_disabled');
  else sendFeedButton.classList.add('btn_disabled');
  sendFeedButton.disabled = !isValid;
}

// Reviews Slider

let cooldown = false;
let coolTime = 0;

window['testimonials'].querySelector('.direction-buttons').addEventListener('click', (event) => {
  if (event.target.tagName !== 'DIV' && !sliderButtonDisabler) {
    const button = event.target.tagName === 'BUTTON' ? event.target : event.target.closest('button');
    moveSlides(button, { width: 515, amount: 1 }, 'review');
    cooldown = true;
    coolTime = 20;
  }
});

reviews.forEach((e) => e.addEventListener('click', () => {
  cooldown = true;
  coolTime = 20;
}));

function autoSlideReviews(startPause = 10) {
  cooldown = false;
  const button = document.createElement('button');
  button.className = 'right';
  const autoPause = 10; // set 10
  let autoTimeout = setTimeout(function autoSlides() {
    if (!cooldown) {
      moveSlides(button, { width: 515, amount: 1 }, 'review');
      autoTimeout = setTimeout(autoSlides, autoPause * 1000);
    }
    else clearTimeout(autoTimeout);
  }, startPause * 1000);
  return;
}
autoSlideReviews();

(function timer() {
  setTimeout(function breakCooldown() {
    if (coolTime === 0 && cooldown) {
      autoSlideReviews(0)
    }
    else if (coolTime > 0) coolTime--;
    autoCooldown = setTimeout(breakCooldown, 1000);
  }, 1000);
})();

// MAP CARD
const cards = document.querySelectorAll('.zoogeography-card');
const markers = document.querySelector('.zoogeography-map').querySelectorAll('object');
markers.forEach((e) => {
  e.addEventListener('load', function() {
    this.getSVGDocument().addEventListener('click', function (event) {
      markers.forEach((e) => {
        e.getSVGDocument().querySelector('svg').classList.remove('hightligth');
      });
      this.querySelector('svg').classList.add('hightligth');
      cards.forEach((e) => {
        e.classList.remove('card-active');
        
        if (e.dataset.animal === this.querySelector('svg').dataset.animal) e.classList.add('card-active');
      });
      markers.forEach((e) => {
        e.classList.remove('marker-active');
        if (e.getSVGDocument().querySelector('svg').classList.contains('hightligth')) {
          e.classList.add('marker-active');
        }
      });
    });
  });
});
// Sets eagle marker as default
document.querySelector('.marker-active').addEventListener('load', function() {
  const curAnimal = this.getSVGDocument().querySelector('svg');
  curAnimal.classList.add('hightligth');
  cards.forEach((e) => {
    e.classList.remove('card-active');
    if (e.dataset.animal === curAnimal.dataset.animal) e.classList.add('card-active');
  });
});