//JavaScript

$(window).scroll(function () {
if ($(window).scrollTop() >= 150) {
$('.navbar').css('background','#212529');
} else {
$('.navbar').css('background','transparent');
}
});


//contact
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
