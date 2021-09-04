$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
      args.complete = $.proxy(args.complete, e);
      args.step = function(now) {
        $.style(e, 'transform', 'rotate(' + now + 'deg)');
        if (step) return step.apply(e, arguments);
      };
  
      $({deg: 0}).animate({deg: angle}, args);
    });
  };

var width = $(window).width();
if (width < 768){
    $(".titlenav").empty()
}

$('#home').hover(function() {
    $('#dropdown-home').css({ opacity: 1 })
}, function() {
    $('#dropdown-home').css({ opacity: 0 })
})
$('#servers').hover(function() {
    $('#dropdown-servers').css({ opacity: 1 })
}, function() {
    $('#dropdown-servers').css({ opacity: 0 })
})

$(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 30;
      mouseY = e.pageY - 30; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: xp+45 +'px', top: yp+55 +'px'});
    }, 10);
  
  });

  let box = document.querySelector(".avatarR");
  let boxBoundingRect = box.getBoundingClientRect();
  let boxCenter= {
      x: boxBoundingRect.left + boxBoundingRect.width/2, 
      y: boxBoundingRect.top + boxBoundingRect.height/2
  };

  let box2 = document.querySelector(".circle");
  let boxBoundingRect2 = box2.getBoundingClientRect();
  let boxCenter2= {
      x: boxBoundingRect2.left + boxBoundingRect2.width/2, 
      y: boxBoundingRect2.top + boxBoundingRect2.height/2
  };
  
  document.addEventListener("mousemove", e => {
      let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);      
      if(angle < 10) {
        box.style.transform = `rotate(${angle+100}deg)`; 
        $('#avatar').removeClass('flipped') 
      } else {
        box.style.transform = `rotate(${angle-100}deg)`;  
        $('#avatar').addClass('flipped')
      }
      
      let angle2 = Math.atan2(e.pageX - boxCenter2.x, - (e.pageY - boxCenter2.y) )*(180 / Math.PI);      
      //box2.style.transform = `rotate(${angle2+Math.floor(Math.random()*20)}deg)`; 
      $('.circle').animateRotate([-180, 180][Math.floor(Math.random()*2)], 500)


      console.log(angle2)
      console.log(angle)
  })