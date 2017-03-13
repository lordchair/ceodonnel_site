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

function updateTargets() {
  for (imageKey in images) {
    var image = images[imageKey];
    var newScale = Math.min(Math.min($(window).height(), $(window).width()*1.5) / 1500, .4);
    image.element.css('transform', 'scale(' + newScale + ') ' + image.transform);
  }
}

function init() {
  images = {
    desk: {
      url: 'assets/desk.png',
      element: $('#desk'),
      transform: 'translate(-10%, 20%)'
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

  $('.gif_container').on('mouseenter', function(e) {
    $(e.target.parentElement.parentElement).addClass('isHover');
  });
  $('.gif_container').on('mouseleave', function(e) {
    $(e.target.parentElement.parentElement).removeClass('isHover');
  });

  $('.gif.standard').on('click touch', function(e) {
    $(e.target.parentElement.parentElement).trigger('mouseenter');
  });

  $('.gif_container').each(function() {
    var me = $(this);
    var id = me.attr('id');
    if (id && urls[id]) {
      me.find('a').last().attr('href', urls[id]);
    }
  });
}
