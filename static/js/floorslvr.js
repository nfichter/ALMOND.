
'''steps:                                                                       
1. set x equal to that of the center line                                       
2. set y equal to that of the target                                            
3. set x equal to that of the target                                            
'''

f7 = { "739" : [156, 126, 78, 48],
       "737" : [156, 176, 78, 48],
       "735" : [156, 226, 78, 48],
       "731" : [156, 276, 78, 88],
       "729" : [156, 366, 78, 28],
       "727" : [156, 396, 78, 48],
       "717" : [156, 446, 48, 48],
       "715" : [156, 541, 38, 28],
       "709" : [156, 571, 38, 78],
       "707" : [156, 651, 38, 48],
       "705" : [156, 701, 38, 48],
       "703" : [156, 751, 78, 84],
       "701" : [236, 751, 78, 42],
       "702" : [316, 694, 38, 55],
       "704" : [316, 636, 38, 55],
       "726" : [296, 381, 58, 23],
       "736" : [296, 281, 58, 58],
       "738" : [296, 221, 58, 58],
       "740" : [296, 161, 58, 58],
       "ES" : [316, 601, 38, 33],
       "WS" : [296, 406, 58, 33],
       "HS" : [296, 126, 58, 33],
       "EL" : [196, 571, 38, 38],
       "ESC" : [316, 471, 38, 98],
       "M" : [296, 341, 58, 18],
       "W" : [397, 361, 58, 18],
       "CL" :[placeholder]
};



var oneflr = function(strt, end) {
    //reading in proper floor 
    flr = "f" + strt[0];
    lns = []; //creating list that will have coords for line directons
    //making 1st coord
    lns[lns.length] = [ (flr[strt][0] + flr[strt][2])/2 , (flr[strt][1] + flr[strt][3])/2];
    //making 2nd coord
    lns[lns.length] = [flr[CL][1] , (flr[strt][1] + flr[strt][3])/2]
    //making 3rd coord		
    lns[lns.length] = [flr[CL][1] , (flr[end][1] + flr[end][3]/2)]
    //making 4th coord
    lns[lns.length] = [ (flr[end][0] + flr[end][2])/2 , (flr[end][1] + flr[end][3])/2];

    return lns
    

}
    
    






