var images = {};
var urls = {
  film: 'https://vimeo.com/clintonodonnell',
  music_video: 'https://www.youtube.com/channel/UCWtgTAmRqFw6OtwBV-la1rQ',
  music: 'https://soundcloud.com/c1inton'
};

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

  var elements = $('img');
  for (element in elements) {
    var el = elements[element];
    $(el).click(function(e) {
      var myEl = e.target;
      var parent = e.target.parentElement
      var id = e.target.parentElement.id
      if (!myEl.classList.contains('hover')) {
        // maybe trigger hover state
        return;
      }
      if (id && urls[id]) {
        window.open(urls[id]);
      }
    });
  }
}

function updateTargets() {
  for (imageKey in images) {
    var image = images[imageKey];
    var newScale = Math.min(Math.min($(window).height(), $(window).width()*1.5) / 1500, .4);
    image.element.css('transform', 'scale(' + newScale + ') ' + image.transform);
  }
}
