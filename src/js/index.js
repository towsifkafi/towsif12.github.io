$.fn.animateRotate = function (angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function (i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function (now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({
      deg: 0
    }).animate({
      deg: angle
    }, args);
  });
};

var width = $(window).width();
if (width < 768) {
  $(".titlenav").empty()
}

$('#home').hover(function () {
  $('#dropdown-home').css({
    opacity: 1
  })
}, function () {
  $('#dropdown-home').css({
    opacity: 0
  })
})
$('#servers').hover(function () {
  $('#dropdown-servers').css({
    opacity: 1
  })
}, function () {
  $('#dropdown-servers').css({
    opacity: 0
  })
})




$.fn.progress = (percent, time) => {
  $('.progress__fill').animate({
    "width": `${percent}%`
  })
  if (time) {
    setTimeout(() => {
      $('.progress__fill').css({
        width: 0
      })
    }, time);
  } else {
    setTimeout(() => {
      $('.progress__fill').css({
        width: 0
      })
    }, 800);
  }
}

getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    data = parts.pop().split(';').shift()
    return JSON.parse(data)
  }
}

setCookie = (name, obj) => {
  var e = 'Thu Nov 29 2100 15:44:38';
  document.cookie = `${name}=` + JSON.stringify(obj) + ';expires=' + e;
}

$('a').click(() => {
  $.fn.progress(100)
})