$(document).foundation()

//this div will contain a list of 10 svg's, each of which will be a map of one floor
var map = document.getElementById("map");

var increment=document.getElementById("increment");
var decrement=document.getElementById("decrement");
var current_floor=document.getElementById("current_floor");
var current_floor_value=parseInt(current_floor.innerHTML, 10);

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

var to_room = document.getElementById("to_room");
var from_room = document.getElementById("from_room");

directions_button.addEventListener("click", function(e){
    input_directions.setAttribute('style', 'display:none');
    show_directions.setAttribute('style', 'display:block');
    get_directions();
    
});

more_directions_button.addEventListener("click", function(e){
    input_directions.setAttribute('style', 'display:block');
    show_directions.setAttribute('style', 'display:none');
    hide_directions();
});

var get_directions = function() {
	var cords;
	if (from_room.value[0] == to_room.value[0]) {
		cords = oneflr(from_room.value, to_room.value);
	}
	else {
		cords = multiflr(from_room.value, to_room.value);
	}
    console.log("going from here to here: ", cords);
    var svG = document.getElementById(from_room.value[0]).contentDocument.querySelectorAll('svg')[0];

    var x0, x1, y0, y1;
    for (var i = 0; i < cords.length - 1; i++,
	     x0=cords[i][0], x1=cords[i+1][0],
	     y0=cords[i][1], y1=cords[i+1][1] 
	){
	
	var new_line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	new_line.setAttribute('x1', x0);
	new_line.setAttribute('y1', y0);
	new_line.setAttribute('x2', x1);
	new_line.setAttribute('y2', y1);
	new_line.setAttribute('stroke', "red");
	new_line.setAttribute('stroke-width', 5);
	new_line.setAttribute('class', "direct_line");
	
	svG.appendChild(new_line);
    }
    console.log(svG);
    console.log(svG.childNodes);
    
};

var hide_directions = function() {
    var svG = document.getElementById(from_room.value[0]).contentDocument.querySelectorAll('svg')[0];
    var elements = svG.getElementsByClassName('direct_line');
    console.log("elements: ", elements);
    while(elements.length > 0){
	elements[0].parentNode.removeChild(elements[0]);
    }
};
