// const articles = document.querySelectorAll('.article-accordeon');
// articles.forEach((e) => {
//   e.querySelector('.article-accordeon__head').addEventListener('click', (event) => {
//     event.target.closest('.article-accordeon').classList.toggle('open');
//   });
// });

// const mainVideo = document.querySelector('.main-container').querySelector('.video');
// const slides = document.querySelectorAll('.slide');
// slides.forEach((e) => {
//   e.addEventListener('click', (event) => {
//     const clickedVid = event.target.closest('.slide').querySelector('.video');
//     [mainVideo.src, clickedVid.src] = [clickedVid.src, mainVideo.src];
// })});

// // Sliders initial settings
// const root = document.documentElement;

// slides.forEach((e, i) => e.style.order = i + 1);

// root.style.setProperty('--shift', '0px');
// let sliderButtonDisabler = false;


// // Pets slider

// function moveSlides(button, slidingSettings, auto = true) {
//   const { width, amount } = slidingSettings;
//   if (button.classList.contains('left')) {
//     //LEFT
//     auto && (sliderButtonDisabler = true);
//     animateMoveSlides(0, -1 * width * amount);
//     changeSlidesOrder(slidingSettings, 'left');
//     setTimeout(() => { animateMoveSlides(1000, 0); }, 50);
//     setTimeout(() => { sliderButtonDisabler = false; }, 1001);
//   }
//   // RIGHT
//   if (button.classList.contains('right')) {
//     auto && (sliderButtonDisabler = true);
//     animateMoveSlides(1000, -1 * width * amount);
//     setTimeout(() => {
//       changeSlidesOrder(slidingSettings, 'right');
//       animateMoveSlides(0, 0);
//       sliderButtonDisabler = false;
//     }, 1001);
//   }
// }

// function changeSlidesOrder(slidingSettings, direction) {
//     slides.forEach((e, i, arr) => {
//       const order = +e.style.order;
//       if (direction === 'left') {
//         e.style.order++;
//         if (+e.style.order > arr.length) e.style.order = 1;
//       }
//       if (direction === 'right') {
//         if (+e.style.order === 1) e.style.order = arr.length;
//         else e.style.order--;
//       }
//     });
//   return;
// }

// function animateMoveSlides(time, shift) {
//   root.style.setProperty(`--time`, `${time}ms`);
//   root.style.setProperty(`--shift`, `${shift}px`);
//   return;
// }

// function setSlides() {
//   const resolution = document.body.offsetWidth;
//   switch (true) {
//     case resolution >= 1920: return {
//       width: 368,
//       amount: 1, // MUST BE 3, BUT AMOUNT OF SLIDES MUST BE 6+
//     };
//     case resolution >= 1200: return {
//       width: 287,
//       amount: 1,
//     };
//     case resolution >= 640: return {
//       width: 116,
//       amount: 1, // MUST BE 3, BUT AMOUNT OF SLIDES MUST BE 6+
//     };
//     default: return {
//       width: 161,
//       amount: 1,
//     };
//   }
// }
// // Cams slider

// let cooldown = false;
// let coolTime = 0;

// document.querySelector('.direction-buttons').addEventListener('click', (event) => {
//   if (event.target.tagName !== 'DIV' && !sliderButtonDisabler) {
//     const button = event.target.tagName === 'BUTTON' ? event.target : event.target.closest('button');
//     moveSlides(button, setSlides());
//     cooldown = true;
//     coolTime = 20;
//   }
// });

// slides.forEach((e) => e.addEventListener('click', () => {
//   cooldown = true;
//   coolTime = 20;
// }));

// function autoSlideReviews(startPause = 10) {
//   cooldown = false;
//   const button = document.createElement('button');
//   button.className = 'right';
//   const autoPause = 10; // set 10
//   let autoTimeout = setTimeout(function autoSlides() {
//     if (!cooldown) {
//       moveSlides(button, setSlides());
//       autoTimeout = setTimeout(autoSlides, autoPause * 1000);
//     }
//     else clearTimeout(autoTimeout);
//   }, startPause * 1000);
//   return;
// }
// autoSlideReviews();

// (function timer() {
//   setTimeout(function breakCooldown() {
//     if (coolTime === 0 && cooldown) {
//       autoSlideReviews(0)
//     }
//     else if (coolTime > 0) coolTime--;
//     autoCooldown = setTimeout(breakCooldown, 1000);
//   }, 1000);
// })();
