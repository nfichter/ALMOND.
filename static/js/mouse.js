var floor0 = [];
var floor1 = [];
var floor2 = [];
var floor3 = [['339', 155, 125, 80, 50, 235, 165], ['337', 155, 175, 80, 50, 235, 195], ['335', 155, 225, 80, 50, 235, 250], ['333', 155, 275, 80, 50, 235, 300], ['329', 155, 325, 80, 50, 235, 348], ['327', 155, 375, 80, 50, 235, 396], ['325', 155, 425, 110, 45, 265, 445], ['315', 155, 470, 65, 50, 220, 507], ['313', 155, 520, 65, 50, 220, 545], ['307', 155, 570, 40, 80, 195, 640], ['305', 155, 650, 40, 50, 195, 673], ['303', 155, 700, 40, 50, 195, 723], ['301', 155, 750, 80, 65, 213, 750], ['302', 315, 635, 40, 110, 315, 693], ['336', 295, 285, 60, 55, 295, 310], ['338', 295, 200, 60, 85, 295, 242], ['351', 385, 125, 65, 75, 385, 180], ['350', 385, 200, 65, 75, 385, 237], ['371', 500, 530, 50, 40, 523, 570], ['372', 550, 530, 50, 40, 573, 570], ['373', 600, 530, 50, 40, 623, 570], ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['HS', 235, 125, 75, 35, 345, 160], ['RS', 310, 125, 75, 35, 270, 160], ['GS', 445, 600, 40, 35, 465, 600], ['EL', 195, 570, 40, 40, 235, 590], ['ESC', 315, 470, 40, 100, 335, 470], ['M', 295, 340, 60, 20, 295, 370], ['W', 395, 360, 60, 20, 295, 350], ['AUX', 355, 600, 90, 120, 400, 600], ['GYM', 485, 600, 165, 120, 570, 600], ['THE', 385, 450, 115, 120, 445, 570]];
var floor4 = [[439, 155, 125, 80, 50, 235, 168], [437, 155, 175, 80, 50, 235, 200], [435, 155, 225, 80, 50, 235, 250], [433, 155, 275, 80, 50, 235, 300], [431, 155, 325, 80, 50, 235, 350], [429, 155, 375, 80, 50, 235, 400], [413, 155, 470, 110, 50, 265, 495], [411, 155, 520, 110, 50, 265, 545], [407, 155, 570, 40, 80, 195, 640], [405, 155, 650, 40, 50, 195, 675], [403, 155, 700, 40, 50, 195, 725], [401, 155, 750, 80, 45, 213, 750], [402, 235, 750, 80, 45, 275, 750], [404, 315, 635, 40, 115, 315, 692], [408, 385, 560, 40, 40, 385, 578], [426, 295, 380, 60, 25, 295, 393], [436, 295, 290, 60, 55, 295, 312], ['438', 295, 260, 60, 30, 295, 270], ['440', 295, 200, 60, 55, 295, 228], ['453', 385, 125, 65, 50, 385, 167], ['451', 385, 175, 65, 50, 385, 200], ['450', 385, 225, 65, 50, 385, 250], ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['HS', 235, 125, 75, 35, 345, 160], ['RS', 310, 125, 75, 35, 270, 160], ['EL', 195, 570, 40, 40, 235, 590], ['ESC', 315, 470, 40, 100, 335, 470], ['M', 295, 340, 60, 20, 295, 370], ['W', 395, 360, 60, 20, 295, 350], ['CL', 280, 160, 280, 750], ['AL', 375, 160, 375, 600]];
var floor5 = [];
var floor6 = [['639', 155, 125, 80, 50, 235, 150], ['635', 155, 175, 80, 50, 235, 200], ['629', 155, 225, 80, 50, 235, 260], ['627', 155, 275, 80, 90, 235, 327], ['615A', 155, 365, 80, 80, 235, 405], ['LIB1', 155, 445, 90, 95, 235, 490], ['LIB2', 155, 540, 40, 255, 235, 490], ['601', 195, 750, 120, 45, 255, 750], ['626', 295, 380, 60, 25, 295, 393], ['636', 295, 280, 60, 60, 295, 300], ['638', 295, 220, 60, 60, 295, 245], ['640', 295, 160, 60, 60, 295, 190], ['ALT', 355, 600, 90, 120, 400, 600], ['GYM', 480, 550, 170, 100, 480, 585], ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['HS', 235, 125, 75, 35, 290, 140], ['GS', 445, 600, 40, 35, 465, 600], ['EL', 195, 570, 40, 40, 235, 590], ['ESC', 315, 470, 40, 100, 335, 470], ['M', 295, 340, 60, 20, 295, 370], ['W', 395, 360, 60, 20, 295, 350]];
var floor7 = [['739', 155, 125, 80, 50, 235, 150], ['737', 155, 175, 80, 50, 235, 200], ['735', 155, 225, 80, 50, 235, 250], ['731', 155, 275, 80, 90, 235, 318], ['729', 155, 365, 80, 30, 235, 380], ['727', 155, 395, 80, 50, 235, 420], ['717', 155, 445, 50, 50, 190, 495], ['715', 155, 540, 40, 30, 183, 540], ['709', 155, 570, 40, 80, 195, 637], ['707', 155, 650, 40, 50, 195, 675], ['705', 155, 700, 40, 50, 195, 725], ['703', 155, 750, 80, 85, 210, 750], ['701', 235, 750, 80, 45, 275, 750], ['702', 315, 695, 40, 55, 315, 720], ['704', 315, 635, 38, 55, 315, 665], ['726', 295, 380, 60, 25, 295, 393], ['736', 295, 280, 60, 60, 295, 310], ['738', 295, 220, 60, 60, 295, 245], ['740', 295, 160, 60, 60, 295, 180], ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['HS', 235, 125, 75, 35, 290, 140], ['EL', 195, 570, 40, 40, 235, 590], ['ESC', 315, 470, 40, 100, 335, 470], ['M', 295, 340, 60, 20, 295, 370], ['W', 395, 360, 60, 20, 295, 350], ['CL', 265, 125, 265, 750]];
var floor8 = [['839', 155, 125, 80, 50, 235, 150], ['837', 155, 175, 80, 50, 235, 200], ['835', 155, 225, 80, 50, 235, 250], ['831', 155, 275, 80, 90, 235, 320], ['829', 155, 365, 80, 30, 235, 380], ['827', 155, 395, 80, 50, 235, 420], ['817', 155, 445, 50, 50, 197, 495], ['815', 155, 495, 40, 75, 195, 515], ['811', 155, 570, 40, 80, 195, 637], ['809', 155, 650, 40, 50, 195, 675], ['803', 155, 700, 50, 105, 195, 725], ['801', 205, 750, 45, 55, 228, 750], ['802', 250, 750, 40, 55, 270, 750], ['804', 315, 635, 40, 115, 315, 690], ['826', 295, 380, 60, 25, 295, 393], ['836', 295, 280, 60, 60, 295, 310], ['838', 295, 220, 60, 60, 295, 250], ['840', 295, 160, 60, 60, 295, 190], ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['HS', 235, 125, 75, 35, 290, 140], ['EL', 195, 570, 40, 40, 235, 590], ['ESC', 315, 470, 40, 100, 335, 470], ['M', 295, 340, 60, 20, 295, 370], ['W', 395, 360, 60, 20, 295, 350]];
var floor9 = [['939', 155, 125, 80, 65, 235, 155], ['935', 155, 190, 80, 65, 235, 217], ['931', 155, 255, 80, 62, 235, 285], ['927', 155, 317, 80, 63, 235, 350], ['925', 155, 380, 80, 65, 235, 410], ['913', 155, 445, 50, 50, 195, 495], ['911', 155, 495, 35, 45, 185, 515], ['909', 155, 540, 40, 45, 190, 540], ['907', 155, 585, 40, 65, 195, 637], ['903', 155, 650, 40, 145, 193, 700], ['901', 195, 750, 120, 45, 255, 750], ['902', 315, 635, 40, 140, 315, 700], ['926', 295, 380, 60, 25, 295, 393], ['936', 295, 270, 60, 70, 295, 305], ['938', 295, 230, 60, 40, 295, 250], ['940', 295, 160, 60, 70, 295, 195],  ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['HS', 235, 125, 75, 35, 290, 140], ['EL', 195, 570, 40, 40, 235, 590], ['ESC', 315, 470, 40, 100, 335, 470], ['M', 295, 340, 60, 20, 295, 370], ['W', 395, 360, 60, 20, 295, 350]];
var floor10 = [['1039', 155, 125, 200, 215, 250, 340], ['1033', 155, 340, 50, 47, 205, 363], ['1025', 155, 387, 50, 48, 205, 408], ['1017', 155, 435, 50, 45, 205, 455], ['1009', 155, 480, 50, 90, 205, 523], ['1000', 155, 570, 50, 65, 205, 600], ['1001', 155, 635, 90, 140, 245, 650], ['1004', 275, 635, 80, 140, 270, 650], ['1006', 285, 530, 70, 70, 285, 585], ['1010', 285, 480, 70, 50, 285, 503], ['1024', 285, 440, 70, 40, 285, 460], ['ES', 315, 600, 40, 35, 333, 600], ['WS', 295, 405, 60, 35, 310, 440], ['M', 295, 340, 60, 20, 295, 370,], ['W', 395, 360, 60, 20, 295, 350], ['EL', 245, 530, 40, 40, 245, 550]];

var flrlist = [floor0, floor1, floor2, floor3, floor4, floor5, floor6, floor7, floor8, floor9, floor10];

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
	if ((floordata[i][1] <= mouseX <= (floordata[i][1] + floordata[i][3])) && (floordata[i][2] <= mouseY <= (floordata[i][2] + floordata[i][4])))
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


