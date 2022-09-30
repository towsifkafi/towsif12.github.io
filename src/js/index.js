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

// Metrics
fetch("https://hmm-api.fly.dev/metrics").then(function(response) {}).then(function(data) {}).catch(function() {});




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
});



window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    XHR.addEventListener("error", (event) => {
      //alert('Error connecting to the API..');
      console.log(event)
    });

    // Set up our request
    XHR.open("POST", "https://werewolf.deta.dev/contact");
    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });

  // Meme
  $.get( "https://werewolf.deta.dev/meme", function( data ) {
    console.log(data)
    $('#thememe').attr('src', data.attachment)
  });


  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let coord = { x: 0, y: 0 };

  document.addEventListener("mousedown", start);
  document.addEventListener("mouseup", stop);
  window.addEventListener("resize", resize);

  resize();

  function resize() {
    ctx.canvas.width = document.body.clientWidth;
    ctx.canvas.height = window.innerHeight;
  }
  function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
  }
  function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
  }
  function stop() {
    document.removeEventListener("mousemove", draw);
  }
  function draw(event) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ACD3ED";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }

});