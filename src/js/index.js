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

$.fn.copy = function() {
  return this.each(function() {
    console.log(this.innerText)
    navigator.clipboard.writeText(this.innerText);
  })
}

function copy(element) {
  var copyText = document.getElementById(element);
  console.log(copyText.innerText)
  navigator.clipboard.writeText(copyText.innerText);
  alert("Copied paste to clipboard");
}

//Button Presses
$('#usernameCopy').click(function() {
  $('#username').copy()
  $('.usernameTooltip').text('Copied').css('color', '#fff')
  setTimeout(() => {
    $('.usernameTooltip').text('Copy').css('color', '#8d8d8d')
  }, 2000);
})

// Metrics
fetch("https://hmm-api.fly.dev/metrics").then(function(response) {}).then(function(data) {}).catch(function() {});


let topButton = document.getElementById("goTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#goTop').fadeIn(250)
    $('#theme2').fadeIn(250)
    $('#theme').fadeOut(250)
  } else {
    $('#goTop').fadeOut(250)
    $('#theme2').fadeOut(250)
    $('#theme').fadeIn(250)
  }
}

function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let theme = 1

function changeTheme() {
  console.log('clicked')
  if(theme) {
    console.log('to white')
    theme = 0
    $(":root").css({ 
      "--theme-color": "rgb(238, 121, 121)", 
      "--background": "#fbfcf8",
      "--box-background": "#fdf6e4",
      "--box-background-l": "#e7decc",
      "--drop-color": "#f08080d1",
      "--font": "#1a1a22"
    })
  } else {
    console.log('to black')
    theme = 1
    $(":root").css({ 
      "--theme-color": "lightcoral", 
      "--background": "#161616",
      "--box-background": "#1d1d1d",
      "--box-background-l": "#2d2d2d",
      "--drop-color": "#f08080d1",
      "--font": "white"
    })
  }
}




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


  // const canvas = document.getElementById("canvas");
  // const ctx = canvas.getContext("2d");
  // let coord = { x: 0, y: 0 };

  // document.addEventListener("mousedown", start);
  // document.addEventListener("mouseup", stop);
  // window.addEventListener("resize", resize);

  // resize();

  // function resize() {
  //   ctx.canvas.width = document.body.clientWidth;
  //   ctx.canvas.height = window.innerHeight;
  // }
  // function reposition(event) {
  //   coord.x = event.clientX - canvas.offsetLeft;
  //   coord.y = event.clientY - canvas.offsetTop;
  // }
  // function start(event) {
  //   document.addEventListener("mousemove", draw);
  //   reposition(event);
  // }
  // function stop() {
  //   document.removeEventListener("mousemove", draw);
  // }
  // function draw(event) {
  //   ctx.beginPath();
  //   ctx.lineWidth = 5;
  //   ctx.lineCap = "round";
  //   ctx.strokeStyle = "#ACD3ED";
  //   ctx.moveTo(coord.x, coord.y);
  //   reposition(event);
  //   ctx.lineTo(coord.x, coord.y);
  //   ctx.stroke();
  // }

});