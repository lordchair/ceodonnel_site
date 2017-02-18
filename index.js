var images = {};

$(document).ready(function() { init(); });
$(window).resize(updateTargets);

function setBg(element, url) {
  element.css('background-image', 'url(' + url + ')');
};

function init() {
  images = {
    desk: {
      url: 'assets/desk.png',
      element: $('#desk'),
      transform: 'translate(-10%, 10%)'
    },
    hand: {
      url: 'assets/hand.png',
      element: $('#hand'),
      transform: 'translate(-20%, 0%)'
    },
    stair: {
      url: 'assets/staircase.png',
      element: $('#staircase'),
      transform: 'translate(30%, 0%)'
    },
  }
  for (image in images) {
    var mymage = images[image];
    setBg(mymage.element.find('.bg'), mymage.url);
  }
  updateTargets();
}

function updateTargets() {
  for (imageKey in images) {
    var image = images[imageKey];
    var newScale = Math.min($(window).width() / 1000, .4);
    image.element.css('transform', 'scale(' + newScale + ') ' + image.transform);
  }
}
