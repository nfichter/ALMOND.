//var floordata = "coords.txt";

//var floor0 = []);
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

//var flrlist = new List(floor0, floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10);
var flrlist = [floor7, floor8];

f = document.getElementById("current_floor"); 
flr = f.value; //gives string of the floor number (aka value)
intflr = flr * 1; //convert the string to a number
//yrflr = "floor" + flr; //returns "floor#"

function getFloorData(flrnbr) {
    return flrlist[flrnbr];
}

//function hover(mouseX, mouseY, flrnbr) {
//    floordata = getFloorData(flrnbr);
//}

//function GetCoordinates(e)
//{
//  var PosX = 0;
//  var PosY = 0;
//  var ImgPos;
//  ImgPos = FindPosition(myImg);
//  if (!e) var e = window.event;
//  if (e.pageX || e.pageY)
//  {
//    PosX = e.pageX;
//    PosY = e.pageY;
//  }
//  else if (e.clientX || e.clientY)
//    {
//      PosX = e.clientX + document.body.scrollLeft
//        + document.documentElement.scrollLeft;
//      PosY = e.clientY + document.body.scrollTop
//        + document.documentElement.scrollTop;
//    }
//  PosX = PosX - ImgPos[0];
//  PosY = PosY - ImgPos[1];
//  document.getElementById("x").innerHTML = PosX;
//  document.getElementById("y").innerHTML = PosY;

//function hover(e, flrnbr) {
//    floordata = getFloorData(flrnbr);
//    var mouseX = e.offsetX;
//    var mouseY = e.offsetY;
//    print mouseX;
//}

//function getFloorData(flrnbr) { //takes int of the floor number
//    var getCoords = floordata[flrnbr-7];
//    alert("Floor..." + getCoords);
//    browser.setAttributeNS(xlinkNS, "href", getCoords);
//    return "hello"
//}
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

