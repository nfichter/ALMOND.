//var floor0 = [];
//var floor1 = [];
//var floor2 = [];
var floor3 = [[339, 155, 125, 80, 50, 235, 165], [337, 155, 175, 80, 50, 235, 195], [335, 155, 225, 80, 50, 235, 250], [333, 155, 275, 80, 50, 235, 300], [329, 155, 325, 80, 50, 235, 348], [327, 155, 375, 80, 50, 235, 396], [325, 155, 425, 110, 45, 265, 445], [315, 155, 470, 65, 50, 220, 507], [313, 155, 520, 65, 50, 220, 545], [307, 155, 570, 40, 80, 195, 640], [305, 155, 650, 40, 50, 195, 673], [303, 155, 700, 40, 50, 195, 723], [301, 155, 750, 80, 65, 213, 750], [302, 315, 635, 40, 110, 315, 693], [336, 295, 285, 60, 55, 295, 310], [338, 295, 200, 60, 85, 295, 242], [351, 385, 125, 65, 75, 385, 180], [350, 385, 200, 65, 75, 385, 237], [371, 500, 530, 50, 40, 523, 570], [372, 550, 530, 50, 40, 573, 570], [373, 600, 530, 50, 40, 623, 570], [ES, 315, 600, 40, 35, 333, 600], [WS, 295, 405, 60, 35, 310, 440], [HS, 235, 125, 75, 35, 345, 160], [RS, 310, 125, 75, 35, 270, 160], [GS, 445, 600, 40, 35, 465, 600], [EL, 195, 570, 40, 40, 235, 590], [ESC, 315, 470, 40, 100, 335, 470], [M, 295, 340, 60, 20, 295, 370], [W, 395, 360, 60, 20, 295, 350], [AUX, 355, 600, 90, 120, 400, 600], [GYM, 485, 600, 165, 120, 570, 600], [THE, 385, 450, 115, 120, 445, 570]];
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

function getRoom(e, flrnbr) {
    roomdata = getRoomData(e, flrnbr);
    return roomdata[0]; //returns the string room name
};

function hover(flrnbr, svg) {
    roomdata = getRoomData(e, flrnbr);
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


