//var floordata = "coords.txt";
var floor0, floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10, dict;
floor0 = "";
floor1 = "";
floor2 = "";
floor3 = "";
floor4 = "";
floor5 = "";
floor6 = "";
floor7 = [['739', 15, 126, 78, 48], ['737', 156, 176, 78, 48], ['735', 156, 226, 78, 48], ['731', 156, 276, 78, 88], ['729', 156, 366, 78, 28], ['727', 156, 396, 78, 48], ['717', 156, 446, 48, 48], ['715', 156, 541, 38, 28], ['709', 156, 571, 38, 78], ['707', 156, 651, 38, 48], ['705', 156, 701, 38, 48], ['703', 156, 751, 78, 84], ['701', 236, 751, 78, 42], ['702', 316, 694, 38, 55], ['704', 316, 636, 38, 55], ['726', 296, 381, 58, 23], ['736', 296, 281, 58, 58], ['738', 296, 221, 58, 58], ['740', 296, 161, 58, 58], ['ES', 316, 601, 38, 33], ['WS', 296, 406, 58, 33], ['HS', 296, 126, 58, 33], ['EL', 196, 571, 38, 38], ['ESC', 316, 471, 38, 98], ['M', 296, 341, 58, 18], ['W', 397, 361, 58, 18]];
floor8 = [['839', 156, 126, 78, 48], ['837', 156, 176, 78, 48], ['835', 156, 226, 78, 48], ['831', 156, 276, 78, 88], ['829', 156, 366, 78, 28], ['827', 156, 396, 78, 48], ['817', 156, 446, 48, 48], ['811', 156, 571, 38, 78], ['809', 156, 651, 38, 48], ['803', 156, 701, 50, 105], ['801', 206, 750, 44, 56], ['802', 250, 750, 41, 56], ['804', 316, 635, 39, 114], ['826', 296, 381, 58, 23], ['836', 296, 281, 58, 58], ['838', 296, 221, 58, 58], ['840', 296, 161, 58, 58], ['ES', 316, 601, 38, 33], ['WS', 296, 406, 58, 33], ['HS', 296, 126, 58, 33], ['EL', 196, 571, 38, 38], ['ESC', 316, 471, 38, 98], ['M', 296, 341, 58, 18], ['W', 397, 361, 58, 18]];
floor9 = "";
floor10 = "";

var dict = {}
dict.flr0 = floor0;
dict.flr1 = floor1;
dict.flr2 = floor2;
dict.flr3 = floor3;
dict.flr4 = floor4;
dict.flr5 = floor5;
dict.flr6 = floor6;
dict.flr7 = floor7;
dict.flr8 = floor8;
dict.flr9 = floor9;
dict.flr10 = floor10;

f = document.getElementById("current_floor"); 
flr = f.value; //gives string of the floor number (aka value)
intflr = flr * 1; //convert the string to a number
yrflr = "floor" + flr; //returns "floor#"
print flr7;

function getFloorData(flrnbr) { //takes int of the floor number
    
    var getCoords = floordata[0];
    alert("Floor..." + getCoords);
    browser.setAttributeNS(xlinkNS, "href", getCoords);
    return 
}
//print getFloorData(flr)

//function hover(mouseX, mouseY, floor) {
// go to the list of rooms/their coordinates for you floor
//then do a loop going thru each list and checking if mousex and mousey fit between the coords
//return the room #
//}

//function click(mouseX, mouseY) {
//add an event listener for click that calls hover so like you know what room your mouse is on
//that returns the room number so ten you can:
//place the room in the get directions function
//document.getElementById("myBtn").addEventListener("click", displayDate);
//    return 
//}

//print getFloorData(flrnbr);
//c.addEventListener('click', click);

