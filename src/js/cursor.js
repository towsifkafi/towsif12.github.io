$('.button').hover(() => {
    $('.circle').animate({ "border-radius": '50%', "height": "17", "width": "17" })
},
() => {
    $('.circle').animate({ "border-radius": '20%', "height": "15", "width": "15" })
})