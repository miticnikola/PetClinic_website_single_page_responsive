//JavaScript

//Navigation
$(window).scroll(function() {

    if ($(window).scrollTop() >= 120) {
        $('.navbar').css({
            'background': '#212529',
            '-webkit-transiton': 'all .5s',
            '-moz-transiton': 'all .5s',
            'transition': 'all .5s',
            'box-shadow': '0px 0px 0px 4px rgba(122, 122, 122, 0.47)'
        });
    } else {
        $('.navbar').css({
            'background': 'transparent',
            'box-shadow': 'none'
        });
    }
});


//navbar-toggler click
var clicked = 0;

$(".navbar-toggler").click(function() {
    clicked++;

    if (clicked % 2 == 0) {
        $('.navbar').css({
            'background': 'transparent',
            'box-shadow': 'none'
        });
    } else {
        $('.navbar').css({
            'background': '#212529',
            '-webkit-transiton': 'all .5s',
            '-moz-transiton': 'all .5s',
            'transition': 'all .5s',
            'box-shadow': '0px 0px 0px 4px rgba(122, 122, 122, 0.47)'
        });
    }
});


// To The Top button
$(window).scroll(function() {
    if ($(window).scrollTop() > 120) {
        $('.back-to-top').fadeIn(500);
    } else {
        $('.back-to-top').fadeOut(500);

    }
});

$(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

//Navigation click animations
// 1.Services
$(".services-btn").click(function() {
    $('html, body').animate({
        scrollTop: $('#services').offset().top
    }, 'slow');
});
// 2.Portfolio
$(".portfolio-btn").click(function() {
    $('html, body').animate({
        scrollTop: $('#portfolio').offset().top
    }, 'slow');
});
// 3.About
$(".about-btn").click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 'slow');
});
// 4.Team
$(".team-btn").click(function() {
    $('html, body').animate({
        scrollTop: $('#team').offset().top
    }, 'slow');
});
// 5.Contact
$(".contact-btn").click(function() {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 'slow');
});


//Contact - message counter
const message = document.getElementById('message');
const current = document.getElementById('current');
const max = document.getElementById('max');

let max_char = 255;

message.addEventListener('keyup', countWords);
max.innerHTML = max_char;

message.setAttribute('maxlength', max_char);


function countWords(event) {
    let len = event.srcElement.value.length;
    current.innerHTML = len;
}


//Prevent Numbers Input in input - name
function preventNumberInput(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
}

$(document).ready(function() {
    $('#name').keypress(function(e) {
        preventNumberInput(e);
    });
});