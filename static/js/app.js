$(document).foundation()
console.log("hello world");

//this div will contain a list of 10 svg's, each of which will be a map of one floor
var map = document.getElementById("map");

var increment=document.getElementById("increment");
var decrement=document.getElementById("decrement");
var current_floor=document.getElementById("current_floor");
var current_floor_value=parseInt(current_floor.innerHTML, 10);
console.log(current_floor_value);

// intrement the floor counter
increment.addEventListener("click", function(e){
    if (current_floor_value < 10) {
	document.getElementById(current_floor_value).setAttribute('width', '0');
	current_floor_value+=1;
	current_floor.innerHTML=current_floor_value;
	document.getElementById(current_floor_value).setAttribute('width', '750');
	
    }
});

//decrement the floor counter
decrement.addEventListener("click", function(e){
    if (current_floor_value > 1) {
	document.getElementById(current_floor_value).setAttribute('width', '0');
	current_floor_value-=1;
	current_floor.innerHTML=current_floor_value;
	document.getElementById(current_floor_value).setAttribute('width', '750');
	
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
var more_directions_button = document.getElementById("more_directions_button");
//console.log(input_directions)

directions_button.addEventListener("click", function(e){
    input_directions.setAttribute('style', 'display:none');
    get_directions();
    show_directions.setAttribute('style', 'display:block');
    
});

more_directions_button.addEventListener("click", function(e){
    input_directions.setAttribute('style', 'display:block');

    show_directions.setAttribute('style', 'display:none');
    
});

var get_directions = function() {
    console.log("we need to get some directions");
};
