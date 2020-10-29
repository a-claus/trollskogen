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
            if (button[i].x < x && x < button[i].x+button[i].width && button[i].y < y && y < button[i].y+button[i].height) 
                {
                    button[i].hit();
                    deleteButtons();
                    //gameStatus=button[i].action;
                }
        }
    }
    clickY = y;
    clickX = x;


}

function mouse_up(ev){
    console.log("mouse_up");
      var x = ev.clientX;
     var y = ev.clientY;
    clickHit(x,y);

}

function clickHit(x,y){
    console.log("clickX: " + x + "  clickY: " + y );
    for (var i=0; i<hitArea.length; i++){
            console.log("click2");
            if (x>hitArea[i].x && x<hitArea[i].x+hitArea[i].width && y>hitArea[i].y && y<hitArea[i].y+hitArea[i].height) 
                {
                    console.log("hit;" + i);
                    hitArea[i].action();
                }
                else if (clickX > hitArea[i].x && clickX < hitArea[i].x + hitArea[i].width && clickY > hitArea[i].y && clickY < hitArea[i].y+hitArea[i].height) {
                    console.log("japp");
                    bagger[bagAktiv].dragFunc()
                    //gameObj[0].bagFunc();
                }
                


        }

    }

let onArea = false;
function mousePosition(e){
    for (i=0; i < button.length; i++){
       
        if (button[i].onArea == true) { 
 
            if (inArea({x: e.x, y: e.y}, button[i].area) == true) {
                //button[i].onAreaFunc();
                onArea = true;
                button[i].oa_func();
              
            }

            else
                {onArea=false;}
        }
    }
}

function inArea(point, area){
    if (point.x > area.x && point.x < area.x + area.width && point.y > area.y && point.y < area.y + area.height)
        { return true; } else { return false; } 
}

