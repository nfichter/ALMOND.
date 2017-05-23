3$(document).foundation()
console.log("hello world");

//this div will contain a list of 10 svg's, each of which will be a map of one floor
var map = document.getElementById("map");

var i;
for (i = 1; i <= 10; i++){
    if (id - 7) {
	console.log("next svg");
	var newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	newSvg.id = i;
	newSvg.setAttribute('height', 400);
	newSvg.setAttribute('width', 200);
	if (i == 1)
	    newSvg.setAttribute('display', 'inline');
	else
	    newSvg.setAttribute('display', 'none');
	var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text.setAttribute('x', 10 * i);
	text.setAttribute('y', 37 * i);
	text.innerHTML = "floor " + i;
	newSvg.append( text );
	map.append( newSvg );
    }
}



// intrement the floor counter
$('.input-number-increment').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val < 10) {
	$input.val(val + 1);
	document.getElementById(val).setAttribute('display', 'none');
	document.getElementById(val + 1).setAttribute('display', 'inline');
    }
});

//decrement the floor counter
$('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    if (val > 1) {
	$input.val(val - 1);
	document.getElementById(val).setAttribute('display', 'none');
	document.getElementById(val - 1).setAttribute('display', 'inline');
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

    
