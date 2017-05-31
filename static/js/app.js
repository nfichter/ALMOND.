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
	document.getElementById(val + 1).setAttribute('width', '750');
    }
});

//decrement the floor counter
$('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val > 1) {
	$input.val(val - 1);
	document.getElementById(val).setAttribute('width', '0');
	document.getElementById(val - 1).setAttribute('width', '750');
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

document.getElementById("current_floor").addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
});

// DIRECTIONS STUFF
var directions_button = document.getElementById("directions_button");
var input_directions = document.getElementById("input_directions");
var show_directions = document.getElementById("show_directions");
//console.log(input_directions)

directions_button.addEventListener("click", function(e){
    input_directions.setAttribute('style', 'display:none');
    get_directions();
    show_directions.setAttribute('style', 'display:block');
    
});

var get_directions = function() {
    console.log("we need to get some directions");
};
