$(document).foundation()
console.log("hello world");

//this div will contain a list of 10 svg's, each of which will be a map of one floor
var map = document.getElementById("map");

// intrement the floor counter
$('.input-number-increment').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val < 10) {
	$input.val(val + 1);
	document.getElementById(val).setAttribute('width', '0');
	document.getElementById(val + 1).setAttribute('width', '500');
    }
});

//decrement the floor counter
$('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val > 1) {
	$input.val(val - 1);
	document.getElementById(val).setAttribute('width', '0');
	document.getElementById(val - 1).setAttribute('width', '500');
    }
    
});

//enter the floor counter
$('.input-number-enter').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val > 1) {
	$input.val(val - 1);
	document.getElementById(val).setAttribute('display', 'none');
	document.getElementById(val - 1).setAttribute('display', 'inline');
    }
    
});

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

