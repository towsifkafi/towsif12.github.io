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
