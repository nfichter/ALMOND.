//var floor0 = [];
//var floor1 = [];
//var floor2 = [];
//var floor3 = [];
//var floor4 = [];
//var floor5 = [];
//var floor6 = [];
var floor7 =  [['739', 15, 126, 78, 48], ['737', 156, 176, 78, 48], ['735', 156, 226, 78, 48], ['731', 156, 276, 78, 88], ['729', 156, 366, 78, 28], ['727', 156, 396, 78, 48], ['717', 156, 446, 48, 48], ['715', 156, 541, 38, 28], ['709', 156, 571, 38, 78], ['707', 156, 651, 38, 48], ['705', 156, 701, 38, 48], ['703', 156, 751, 78, 84], ['701', 236, 751, 78, 42], ['702', 316, 694, 38, 55], ['704', 316, 636, 38, 55], ['726', 296, 381, 58, 23], ['736', 296, 281, 58, 58], ['738', 296, 221, 58, 58], ['740', 296, 161, 58, 58], ['ES', 316, 601, 38, 33], ['WS', 296, 406, 58, 33], ['HS', 296, 126, 58, 33], ['EL', 196, 571, 38, 38], ['ESC', 316, 471, 38, 98], ['M', 296, 341, 58, 18], ['W', 397, 361, 58, 18]];
var floor8 = [['839', 156, 126, 78, 48], ['837', 156, 176, 78, 48], ['835', 156, 226, 78, 48], ['831', 156, 276, 78, 88], ['829', 156, 366, 78, 28], ['827', 156, 396, 78, 48], ['817', 156, 446, 48, 48], ['811', 156, 571, 38, 78], ['809', 156, 651, 38, 48], ['803', 156, 701, 50, 105], ['801', 206, 750, 44, 56], ['802', 250, 750, 41, 56], ['804', 316, 635, 39, 114], ['826', 296, 381, 58, 23], ['836', 296, 281, 58, 58], ['838', 296, 221, 58, 58], ['840', 296, 161, 58, 58], ['ES', 316, 601, 38, 33], ['WS', 296, 406, 58, 33], ['HS', 296, 126, 58, 33], ['EL', 196, 571, 38, 38], ['ESC', 316, 471, 38, 98], ['M', 296, 341, 58, 18], ['W', 397, 361, 58, 18]];
//floor9 = [];
//floor10 = [];

//var flrlist = [floor0, floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10];
var flrlist = [floor7, floor8];

f = document.getElementById("current_floor"); 
flr = f.value; //gives string of the floor number (aka value)
intflr = flr * 1; //convert the string to a number
//yrflr = "floor" + flr; //returns "floor#"

function getFloorData(flrnbr) {
    return flrlist[flrnbr];
}

function getRoomData(e, flrnbr) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    floordata = getFloorData(flrnbr);
    for (i = 0; i < floordata.length; i++) {
	if ((floordata[i][1] <= mouseX <= (floordata[i][1] + floordata[i][3])) && (floordata[i][2] <= mouseX <= (floordata[i][2] + floordata[i][4])))
	    return floordata[i]; //returns a list with the room data and the room coordinates
    };
    return "wrong floor";
};

function getRoom(flrnbr) {
    roomdata = getRoomData(e, flrnbr);
    return roomdata[0]; //returns the string room name
};

function hover(flrnbr, svg) {
    //call get room data
    //create a rectangle with the coordinates from the list
    //make it a certain color and a non-opaque transparency
};



//function click(mouseX, mouseY) {
//add an event listener for click that calls hover so like you know what room your mouse is on
//that returns the room number so ten you can:
//place the room in the get directions function
//document.getElementById("myBtn").addEventListener("click", displayDate);
//    return 
//}


