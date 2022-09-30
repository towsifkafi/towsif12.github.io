$(document).ready(function () {

    var mouseX = 0,
        mouseY = 0;65
    var xp = 0,
        yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    setInterval(function () {

        let bodyBoundingRect = document.querySelector("body").getBoundingClientRect()
        //console.log(bodyBoundingRect)

        let extendX = 0
        let extendY = 0

        
        //if((bodyBoundingRect.width - mouseX) < 70) extendX += 70+bodyBoundingRect.width - mouseX
        //if((bodyBoundingRect.height - mouseY) < 70) extendY += (bodyBoundingRect.height - mouseY)
        //console.log(bodyBoundingRect.width - mouseX, extendX)
        //console.log(bodyBoundingRect.height - mouseY, extendY)


        xp += ((mouseX-extendX - xp) / 6);
        yp += ((mouseY-Math.abs(extendY) - yp) / 6);

        $("#circle").css({
            left: xp + -6 + 'px',
            top: yp + -6 + 'px'
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
    //let angle2 = Math.atan2(e.pageX - boxCenter2.x, -(e.pageY - boxCenter2.y + extendX)) * (180 / Math.PI);
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

$('.profile').hover(() => {
    $('.circle').animate({
        "border-radius": '50%',
        "height": "17",
        "width": "17"
    })
}, () => {
    $('.circle').animate({
        "border-radius": '20%',
        "height": "15",
        "width": "15"
    })
})