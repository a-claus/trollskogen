var button =[]; //x,y,xLength,ylength
var hitArea=[]; //x, y, width, heigth, action
buttonHit=false;

let clickX; let clickY;
function on_canvas_click(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    ctx = myGameArea.context;
    if (button.length>0){
       
        for (var i =0; i<button.length;i++){
            if (button[i].x<x && x<button[i].x+button[i].width && button[i].y<y && y<button[i].y+button[i].height) 
                {
                    button[i].hit();
                    deleteButtons();
                    //gameStatus=button[i].action;
                }
        }
    }
    clickY = y;
    clickX = x;
     
    //if (x>38 && x<115 && y<395 && y>360 && bagger.i==true) {bagger.setBagImg();}
   // clickHit(x,y);

}

function mouse_up(ev){
    console.log("mouse_up");
      var x = ev.clientX;
     var y = ev.clientY;
    clickHit(x,y);

}

function clickHit(x,y){
    console.log("click1" + hitArea.length);
    for (var i=0; i<hitArea.length; i++){
            console.log("click2");
            if (x>hitArea[i].x && x<hitArea[i].x+hitArea[i].width && y>hitArea[i].y && y<hitArea[i].y+hitArea[i].height) 
                {
                    console.log("hit");
                    hitArea[i].action();
                }
                else if (clickX > hitArea[i].x && clickX < hitArea[i].x + hitArea[i].width && clickY > hitArea[i].y && clickY < hitArea[i].y+hitArea[i].height) {
                    console.log("japp");
                    gameObj[0].bagFunc();
                }
                


        }

    }





function xdrawCCard(){ //190612
    console.log("iaCard");
   
ctx = myGameArea.context;
ctx.drawImage(imgTarning, spriteTarning.T[1][0],spriteTarning.T[1][1],spriteTarning.T[1][2],spriteTarning.T[1][3], 100,100,50,50);
drawCard("troll");

}