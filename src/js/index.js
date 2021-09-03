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
  
  document.addEventListener("mousemove", e => {
      let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);      
      box.style.transform = `rotate(${angle+90}deg)`;  
      console.log(angle+90)
  })