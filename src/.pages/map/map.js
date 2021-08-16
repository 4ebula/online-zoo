// MAP CARD
const cards = document.querySelectorAll('.zoogeography-card');
const cardContainer = document.querySelector('.zoogeography-card__container');
const objects = document.querySelector('.content-container').querySelectorAll('object');
const markers = Array.from(objects).filter((e) => {
  if (e.className.includes('marker')) return e;
});
markers.forEach((e) => {
  e.addEventListener('load', function() {
    this.getSVGDocument().addEventListener('click', function (event) {
      markers.forEach((e) => {
        e.getSVGDocument().querySelector('svg').classList.remove('hightligth');
      });
      cardContainer.classList.remove('hidden');
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

document.querySelector('.content-container').addEventListener('click', (event) => {
  if (event.target.className === 'content-container') {
    cardContainer.classList.add('hidden');
    markers.forEach((e) => {
      e.getSVGDocument().querySelector('svg').classList.remove('hightligth');
    });
    markers.forEach((e) => {
      e.classList.remove('marker-active');
    });
  }
});