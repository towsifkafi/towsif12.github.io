$(document).ready(function () {

    var mouseX = 0,
        mouseY = 0;
    var xp = 0,
        yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX - 30;
        mouseY = e.pageY - 30;
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $("#circle").css({
            left: xp + 45 + 'px',
            top: yp + 55 + 'px'
        });
    }, 10);

});

let box2 = document.querySelector(".circle");
let boxBoundingRect2 = box2.getBoundingClientRect();
let boxCenter2 = {
    x: boxBoundingRect2.left + boxBoundingRect2.width / 2,
    y: boxBoundingRect2.top + boxBoundingRect2.height / 2
};
document.addEventListener("mousemove", e => {
    let angle2 = Math.atan2(e.pageX - boxCenter2.x, -(e.pageY - boxCenter2.y)) * (180 / Math.PI);
    //box2.style.transform = `rotate(${angle2+Math.floor(Math.random()*20)}deg)`; 
    $('.circle').animateRotate([-180, 180][Math.floor(Math.random() * 2)], 500)
})

$('.button').hover(() => {
        $('.circle').animate({
            "border-radius": '50%',
            "height": "17",
            "width": "17"
        })
    },
    () => {
        $('.circle').animate({
            "border-radius": '20%',
            "height": "15",
            "width": "15"
        })
    })