let box = document.querySelector(".avatarR");
  let boxBoundingRect = box.getBoundingClientRect();
  let boxCenter= {
      x: boxBoundingRect.left + boxBoundingRect.width/2, 
      y: boxBoundingRect.top + boxBoundingRect.height/2
  };

  
  document.addEventListener("mousemove", e => {
      let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);      
      if(angle < 10) {
        box.style.transform = `rotate(${angle+80}deg)`; 
        $('#avatar').removeClass('flipped') 
      } else {
        box.style.transform = `rotate(${angle-80}deg)`;  
        $('#avatar').addClass('flipped')
      }

      //console.log(angle2)
      //console.log(angle)
  })