var mapImages=[];
var cardImages = []; 
var historik=[];
var vilketObjAction;
var ctx = myGameArea.context;
let magStigIndex=-1;
let drawFunc;
let temp; let tempArray = [];



const NSVO=["norr","soder","vast","ost"]; //soder
const inverseNSVO=["soder","norr","ost","vast"];
function invNSVO(vaderstrack){for (i=0; i<4; i++){if (vaderstrack==NSVO[i]) break;} return inverseNSVO[i];}
var special;
var imageObj = new Image();
var doFunc; 

imageObj.src="img/map_start.png" ;
var gameStatus = [];
gameStatus.push(start);

var figur=[];
var moving = false;

function startGame() {
   console.log("SG");
   gameObj.push(edgeNorr, edgeSoder, edgeOster, edgeVaster);
    myGameArea.start();
    //figur.push(new Player()); ???
   // wood = new Wood(81); 
   
}

function drawPolygon(coord, color="rgb(146,42,42)"){
        var ctx = myGameArea.context;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(coord[0], coord[1]);
                for(var i=2; i < coord.length; i = i+2){
                    ctx.lineTo(coord[i], coord[i+1]);
                }
                ctx.closePath();
                //ctx.strokeStyle = "rgb(146,42,42)";
                //ctx.stroke(); 
                ctx.fill();
}


var ajaxQueue=0;
let listOfFunc = [];
let hitIndex;
let GSD = "wait";
let queue = [];
let movepause = false;



function move(){
    
       
            updateGameArea();
            return true;
}


function start(){
    wood = new Wood(81); 
   // queue.push(move);
    setDraw();
    console.log("start");
    button.push(new Button(move, 150, 170, "Start")); 
    return false;

}
function diceRuta(){
    movepause = true;
    gameObj[hitIndex].drawRuta();
    return false;
}

function ajaxwait(){
        /* 
        Om man väntar på server, då är frågan vad ska hända då? Och vad ska hända efter.
            - Vänta på server
            - Bara köra på för fullt?

        */
        // ajaxQ.status  waitBlock / waitDrive?  / klar
        // ajaxQ.namn 
        // ajaxQ.action 
        
            ajaxQ.forEach(function(element, index) { //index array
                
                 if (element.status == "klar") {
                    if (element.action) gameStatus.push(element.action);
                    ajaxQ.splice(index, 1);
                }

            })


        


            if (ajaxQueue == 0){
               gameStatus.push(move);
               return false;
            }
        return true
        ;
}

function deleteObj(){
            deleteObject(tippex);
            gameObj[0].placeMe = true;
            queue.push(move);
            return true;
}
//function runStatusar(value, index, array){

/*-------------------------------------------
Loop function
--------------------------------------------*/

let turnklar = true;
/*let wait =[];

if (wait.length > 0){

}*/

function loop(){
    let igen = false;
    if (turnklar == true){
        turnklar = false; 
        if (movepause == true) gameStatus = removeMove(gameStatus);
        
        if (gameStatus[0] == undefined)  gameStatus.splice(0, 1);
        if (gameStatus.length > 0){
            igen = gameStatus[0]();
            if (igen == true) gameStatus.push(gameStatus[0]);
            gameStatus.splice(0, 1);
        }
    }
    turnklar = true;
    
}    



function removeMove(array){
    var arrayEnd = array.length - 1;  
    for (var i = arrayEnd; i > -1; i--){   
        if (array[i].name === "move") {
            console.log("AA" +arrayEnd); 
            console.log(i);  
            console.log(array[i].name);  
            array[i] = 5;  
            console.log(array[i].name);   
            array.splice(i, 1);
            console.log("AB" +arrayEnd); 
        }
    }
    console.log(array);  
    movepause = false;  
    return array;  
}

/*-------------------------------------------

--------------------------------------------*/


function drawMeny(){ 
        ctx = myGameArea.context;

        ctx.fillStyle = "blue";
        ctx.font="10px Georgia";
        ctx.textAlign="left";
        ctx.fillText(wood.mapNR +"-"+ map[wood.mapNR].namn,10,15);
        drawHarts(0,300,10);
        ctx.font="16px Georgia";
        drawStyrka(0,25,10);
        drawIQ(0,250,10);
        drawMagi(0,330,350);
        drawBag();

    
}

function drawBag(){
     ctx = myGameArea.context;
 ctx.drawImage(bag, -10, 335,150,75); 
   // if (bagger.index>-1){ctx.drawImage(bagger.image,40,350,26,35);}
     if (bagAktiv > -1){ctx.drawImage(bagger[bagAktiv].img, 40, 350, 26, 35);}
}

function drawStyrka(index,x,y){
     ctx = myGameArea.context;
    ctx.drawImage(ICONstyrka, x, y); //10,10;
    ctx.fillStyle="white";
    ctx.fillText(gameObj[index].styrka, x+21, y+28);}

 function drawIQ(index,x,y){
     ctx = myGameArea.context;
    ctx.drawImage(ICONiq, x, y); //10,10;
    ctx.fillStyle="black";
    //ctx.fillText(figur[index].styrka, x+21, y+28);}  
    ctx.fillText(gameObj[0].iq, x+25, y+28);}//21

function drawMagi(index,x,y){
     ctx = myGameArea.context;
    ctx.drawImage(ICONmagi, x, y); //10,10;
    ctx.fillStyle="white";
    //ctx.fillText(figur[index].styrka, x+21, y+28);}  
    ctx.fillText(gameObj[0].magi, x+15, y+25);}//25 , 21, 17   

function end(){}

function startaIgen(){
    //nollsälla värden

     deleteObjects();
   
    console.log("SI");
   
    getFile(figurer[1].url);
    //lotta kort
    crupier = lottaCards();
    blanda = shuffle();
    //lotta ny karta
    makeMap();
    wood.update(81);
    setDraw("soder");
   //gameStatus.push(move);
    deleteObject("Prinsen");
    }


function moveStart(){ movepause = false; gameStatus.push(move); return false;}
function moveFunc(){leaveCard(); movepause = false; gameStatus.push(move); return false;}

function diceFunc(){console.log("df"); queue.push(diceRuta);}
var hittad;
var figurImg; var figurRubrik; var figurText; var figurAction = ""; var figurButton = "";



function drawRuta(rubrik="tom", text="tom", img="tom", buttons="tom"){
    console.log("dr");
    console.log(gameStatus);
    console.log(buttons);
    movepause=true;
    if (rubrik=="tom")
        {
            rubrik=figurRubrik;
            img=figurImg;
            text=figurText;
            buttons=[{action: figurAction, text: figurButton}];
            console.log("Deprached: drawruta på2:" + rubrik);
        }
    var x=50;
    var y=100;
    var act;
    ctx.drawImage(rutaBG, x, y);
    ctx.drawImage(img , x+6, y+92,300,100); //bilden på figur
    textWriter(rubrik, x + rutaBG.width/2, y + 30, 26, "center");
    textWriter(text, x+30, y+50, 26, "black");
    let bhsY = y + 200 - buttons.length * 50;
    for (var i = 0; i < buttons.length; i++){
        button.push(new Button(buttons[i].action, x+190, bhsY + i * 50, buttons[i].text));
    }
    console.log(text.rubrik + "drawRuta");
}

function drawDiceRuta(text, img, buttons, bonus = 0){
    console.log(text.rubrik);
    console.log(text.rubrik + "diceRuta");
    var x=50;
    var y=100;
    ctx = myGameArea.context;
    ctx.drawImage(rutaBG, x, y);
    ctx.drawImage(img, x+6, y+92, 100, 100);
    textWriter(text.rubrik, 200, 150, 26, "center");
    //textWriter(text.brod, x+30, y+50, 26, "black");
    if (gameObj[hitIndex].bonus) drawBonus(x+130, y+140);
    if (gameObj[hitIndex].T6 > 0) drawDice(x+115, y+160,0, gameObj[hitIndex].T6, bonus);
    console.log(buttons);
    let bhsY = y + 200 - buttons.length * 50;
    for (var i = 0; i < buttons.length; i++){
        button.push(new Button(buttons[i].action, x+190, bhsY + i * 50, buttons[i].text));
    }

}

function drawCombatRuta(text, img, buttons){ //bonus?
    console.log(text.rubrik);
    var x = 0;
    var y = 0;
    console.log("dcr" + hitIndex);
    ctx = myGameArea.context;
    ctx.drawImage(img, 120, 0, 160, 180);
    ctx.drawImage(gameObj[0].img, 114, 240, 183, 170);
    ctx.drawImage(combatBG, 0, 0, 400,400);
    drawStyrka(hitIndex, 100, 90);
    drawStyrka(0, 100, 340);
    drawHarts(hitIndex, 285, 15);
    drawHarts(0, 285, 365);
    textbox(text.brod, {color:"red"}, 20, 50, 60);
    textWriter(text.rubrik, 20, 30, 26, "black" ,"left");
 
    if (gameObj[hitIndex].T6 > 0){ 
        drawDice(x+135, y+228, 0, gameObj[0].T6);
        drawDice(x+250, y+138, 1, gameObj[hitIndex].T6);
        drawResultFight();
    }
    let bhsY = y + 300 - buttons.length * 50;
    for (var i = 0; i < buttons.length; i++){
        button.push(new Button(buttons[i].action, 300, bhsY + i * 50, buttons[i].text));
    }
console.log( T6);

}

var diceText; var T6=[]; var T6text=[]; var T6actions=[]; var diceBonus;
var diceStatus; var diceRubrik;  var diceImg; var buttons;

function drawBonus(x,y){
    let bonus=gameObj[hitIndex].bonus;
    gameObj[0][bonus]
    if (bonus == "iq") drawIQ(0,x,y);
}

function drawDice(x, y, index, tSlag){  
    tSlag -= 1; 
    
    if (index == 1){tSlag +=6;}
    console.log(tSlag) 
        ctx.drawImage(imgTarning, spriteTarning.T[tSlag][0],spriteTarning.T[tSlag][1],spriteTarning.T[tSlag][2],spriteTarning.T[tSlag][3], x,y,30,30);  
}

function drawResultFight(){
    let style ={
        color:"white",
        strokeColor: "black",
        font: "26px Georgia",
        align:"center"   
    }
    let T6res = gameObj[0].T6 - gameObj[hitIndex].T6 + gameObj[0].styrka - gameObj[hitIndex].styrka;
    if (T6res < 0) { 
                ctx.drawImage(fightLose, 175, 230, 50, 50);
                ctx.drawImage(fightWin, 175, 114, 50, 50); 

    } 
    if (T6res > 0) { 
                ctx.drawImage(fightWin, 175, 230, 50, 50);
                ctx.drawImage(fightLose, 175, 114,50, 50) ; 

    } 
     if (T6res == 0) { 
        console.log("draw");
                ctx.drawImage(fightDraw, 175, 230, 50, 50);
                ctx.drawImage(fightDraw, 175, 114, 50, 50); 

    }
    textbox(gameObj[hitIndex].T6 + gameObj[hitIndex].styrka, style, 200, 142, 60);
    textbox(gameObj[0].T6 + gameObj[0].styrka, style, 200, 263, 60);
}

var flyingObj = []; //{pos: destination: img:}

function drawFlyingObject(id=0){
    console.log("fo" +flyingObj.length);
    var dx = flyingObj[id].destinationX - flyingObj[id].posX; //-10
    var dy = flyingObj[id].destinationY - flyingObj[id].posY; //10
    
    var konstX = Math.abs(dx/dy);
    var konstY=Math.abs(dy/dx);

    flyingObj[id].posY = flyingObj[id].posY + 2*konstY;
    flyingObj[id].posX = flyingObj[id].posX - 2*konstX;

    if(flyingObj[id].posY>flyingObj[id].destinationY){flyingObj[id].posY = flyingObj[id].destinationY;} //killFigur(id);}
    if(flyingObj[id].posX>flyingObj[id].destinationX){flyingObj[id].posX = flyingObj[id].destinationX;}
        ctx.drawImage(flyingObj.img, flyingObj[id].posX , flyingObj[id].posY);




}




function drawMovingObject(id){ //bild, frånVar, till
/*--------------------------------------------
Saker som ska flyttas över spelplanen. Exempelvis när man stoppar ner något i väskan.
*/
    
    var toX=10;
    var toY=320;
    var dx = toX - figur[id].x; //-10
    var dy = toY - figur[id].y; //10
    
    var konstX=Math.abs(dx/dy);
    var konstY=Math.abs(dy/dx);
   
     figur[id].y = figur[id].y + 2*konstY;
    figur[id].x = figur[id].x - 2*konstX;
    if(figur[id].y>395){figur[id].y=395;}
    if(figur[id].x<5){figur[id].x=5;}

    ctx.drawImage(figur[id].card.img, figur[id].x, figur[id].y); //agag
    if (toX > figur[id].x && toY < figur[id].y){
        GSD = "move"; 

        bagger.sput(figur[id].card.id);
        killFigur(id);
    }


}


function drawHarts(who, x, y){
   // console.log("dh" + gameObj[0].skada);
    var antalRoda;
    for (var i=0; i < gameObj[who].liv; i++){
        antalRoda = gameObj[who].liv - gameObj[who].skada-i;
       
        if (antalRoda >= 1){
             ctx.drawImage(r_hart, x+i*20, y); //58+x+i*20, y+45
        }
        else if (omHalv(antalRoda)==0.5 && antalRoda>=0) {
            ctx.drawImage(h_hart, x+i*20, y); 
        }
        else
        {
            ctx.drawImage(b_hart, x+i*20, y);
        }
    }
}

function omHalv(a){
return (a-Math.floor(a));

}



function xdrawRoads(karta, width=50, height=50, color="white"){
    var vaderstrack=["norr", "soder", "vast", "ost"];
    var xPos=[170,170,0,340];
    var yPos=[0,340,170,170];
    var ms=magicStig();
    for (x=0; x<vaderstrack.length; x++){
       
        if (map[karta][vaderstrack[x]]==1 || vaderstrack[x]==ms){
            
            ctx.fillStyle = color;
            ctx.fillRect(xPos[x], yPos[x], 60, 60);

        }
    }
}



function xdrawBro(karta){
    var vaderstrack=["norr","vast"];
   
    //ctx = myGameArea.context;
    
    ctx.fillStyle="white";
    var aX; var bY;
    ctx.fillRect(0, 170, 400, 60);

   

    ctx.fillRect(170, 0, 60, 400);
    ctx.fillStyle="rgb(120,120,120)";
        if (map[karta][vaderstrack[0]]==2){
            ctx.fillRect(170,150,60,100);

        }else{
             ctx.fillRect(150,170,100,60);

    }
    ctx.fillStyle="brown";

    //ctx.rect(160,160,80,80);

    

        if (map[karta][vaderstrack[0]]==2){aX=0;bY=4;} else {bY=0;aX=4;}
            for (var d=0;d<3;d++){
                if (d==1)    ctx.fillStyle="rgb(50, 50, 50)";
                if (d==2)    ctx.fillStyle="white";



                ctx.fillRect(166+aX*d, 166+bY*d, 66-aX*d*2, 66-bY*d*2);
            }
}
/*
  


*/

var cardAction;


function xmonsterMove(num){
var xLong=figur[num].x-figur[0].x;
var yLong=figur[num].y-figur[0].y;



    if (Math.abs(xLong)>Math.abs(yLong)){
        if (xLong>0){figur[num].speedX= -.25;} 
        else {figur[num].speedX=.25;}
    }
    else
    {
        if (yLong>0){figur[num].speedY= -.25;} 
        else {figur[num].speedY=.25;}
    }
}


function getIndexGameObj(input){
            var index = gameObj.findIndex(zz => zz["namn"] == input);
            return index;
}

function getKartbitCard(input){
            var index = map.findIndex(zz => zz["card"]==input);
            return index;
}

function getIndex(input){
            var index = gameObj[0].findIndex( function(index) {return index["upgrades"] ==="Mimers Brunn";} );
            return index;
}

function deleteObject(vad){
    var nummer = gameObj.findIndex(function(index) {return index["namn"] === vad; });
     gameObj.splice(nummer, 1);  
}


let hitObjects = 0;    
function deleteObjects(){
     let hitObjects = 0;
    if (gameObj.length > 5) {gameObj.splice(5, gameObj.length - 5);}

   console.log("---");
   console.log(gameObj);

    kartObj.splice(1, kartObj.length - 1);
    mapImages.splice(mapImages.length - 1);
    kartObj.push({
        miljo: false, figur : false, info: true,
        draw: function(){
            drawMeny();}
    });    

    if (cardImages.length>0) cardImages.splice(0, cardImages.length)

}

function ajaxer(url){
    console.log("ajaxwe");
        //gameStatus.push(ajaxwait);
       // ajaxQueue++;
       
        getFile(url);
       

}

function mapChange(vaderstrack){
    //console.log(tempArray);
   deleteObjects();
    historik.push(wood.mapNR);
  //  if (vaderstrack )
    var nyRuta = countMap(wood.mapNR, vaderstrack);
    //console.log("a:"+ nyRuta + vaderstrack);
    if (vaderstrack == "jump") {gameObj[0].vaderstrack = tempArray[1]; vaderstrack=tempArray[1]}
    
    wood.update(nyRuta);


    
    setFloor(vaderstrack);
    var nyRuta = wood.mapNR;
    
    wood.vaderstrack = invNSVO(vaderstrack);
    setDraw(invNSVO(vaderstrack));
     
    var nyttCard = map[wood.mapNR].card;
    
   // if (nyRuta==81) imageObj.src=map[81].bild;
   
    if (nyttCard == 0 || nyttCard > 1){
        
        if (card[nyttCard].url) {
            movepause = true;
           // gameStatus.push(ajaxwait);
           // ajaxQueue++;
            getFile(card[nyttCard].url);
        }
        else{
           // figur.push(new Monster(map[wood.mapNR].card));
           // figur[1].floor=1;
        }

        }
    
}

function unsetKartbitsaction(){
    bildaction="";
    bildColorForAction="";
    //hitObjects--;
}




function setKartbitsAction(index){
     
      
       console.log("indie" + index);
       console.log(actions);
            bildColorForAction = actions[index].color;
            bildaction = actions[index].func;
            bild = actions[index].img;
            
}       


var colorMinne;

function xmoveFigurOK(x,y){
    var cString=[];
        cString[0]=getRGB(x, y);
        cString[1]=getRGB(x+8, y);
        cString[2]=getRGB(x, y+8);
        cString[3]=getRGB(x-8, y);
        cString[4]=getRGB(x, y-8);

    if (cString[0]=="255 255 255"){figur[0].x=x; y=y; console.log("0");}
        else if (cString[1]=="255 255 255"){figur[0].x=x+8; y=y; console.log("1");}
            else if (cString[2]=="255 255 255"){figur[0].x=x; y=y+8; console.log("2");}
                else if (cString[3]=="255 255 255"){figur[0].x=x-8; y=y; console.log("3");}
                    else if (cString[4]=="255 255 255"){figur[0].x=x; y=y-8; console.log("4");}
    figur[0].x=x-10;
    figur[0].y=y-10;
  
}
// funkar inte
function getRGB(x, y){
   //console.log(x+ " " +y);
    var cString; var c=[];
    c = ctx.getImageData(x, y, 1, 1).data;
    cString=c[0]+" "+c[1]+" "+c[2]; 
    return cString;
}

function getRGBa(x, y){
   //console.log(x+ " " +y);
    var cString; var c=[];
    c = ctx.getImageData(x, y, 1, 1).data;
    cString=c[0] + " " + c[1] + " " + c[2] + " " + c[3]; 
    return cString;
}

function getOKplace(x, y, floor=1, id=0){
    var ab=0; var color;
do {
    var a =Math.floor(Math.random()*300)+50;
    var b =Math.floor(Math.random()*300)+50;     
    color=getRGB(a,b);
    if (color=="255 255 255") ab++;


}
while (ab == 0)  


return {x:a,y:b};
}


function kordinatorXY(kart_nr){
    var x=kart_nr%9;
    var y=Math.floor(kart_nr/9);
    return [x,y];

}
/*
function drawImage(image, x, y, scale = 1, rotation = 0){
    console.log("DI");
    ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    ctx.rotate(rotation);
    //ctx.drawImage(image, - image.width / 2, - image.height / 2);
    ctx.drawImage(image, x, y);
}
*/
function textbox(text, style, x, y, radwidth){
    if (text == undefined) {return;} //text = "Saknas";}
    text = " " + text;
    
    if (style.color) {ctx.fillStyle = style.color; } else {ctx.fillStyle = black;}
    if (style.align) {ctx.textAlign = style.align; } else {ctx.textAlign = "left";}
    if (style.font) {ctx.font = style.font; } else {ctx.font = ctx.font="16px Georgia";}
    if (style.strokeColor) {ctx.strokeStyle = style.strokeColor; console.log("textkant");}

    //if (style.size) {ctx.strokeStyle = text.strokeColor;} else {ctx.textAlign = "left";}
    //ctx.measureText(text).width

    //ctx.strokeText(text, x, y+14*i); 
    //str.indexOf(searchValue, fromIndex)
    var textIndex = 0; var mellanslag = [0];
    while (text.indexOf(" ", textIndex + 1) != -1){
         textIndex = (text.indexOf(" ", textIndex + 1))
         mellanslag.push(textIndex);
     }
     mellanslag.push(text.length);

     var texten = ""; var start = 0; var klartext = ""; rad = [];
     texten = text.substring(mellanslag[start]+1, mellanslag[end]);
    for (let end = 1; end < mellanslag.length; end++){
        texten = text.substring(mellanslag[start]+1, mellanslag[end]);
        
        if (ctx.measureText(texten).width > radwidth){
            if (start-end==1){
                
            }
            else{
              
            texten = text.substring(mellanslag[start]+1, mellanslag[end-1]); //xyz ta bort mellanslag från nästa rad
            rad.push(texten);
            start = end-1;
            }
        }
        if (ctx.measureText(texten).width < radwidth && end == mellanslag.length-1){
            texten = text.substring(mellanslag[start]+1, mellanslag[mellanslag.length-1]);
            rad.push(texten);
        }
    }   
       
    for (var i = 0; i < rad.length; i++){
        
         ctx.fillText(rad[i], x, y + 14 * i);
         if (style.strokeColor) {
            
             
             ctx.strokeText(rad[i], x, y+14*i); 
            }
    }

}

function textWriter(text, x, y, lineLength = 40, color= "white", align = "left"){
    var textut;
    ctx.textAlign = align;
    ctx.fillStyle = color;
    if (text == undefined) text = "Yihaa";
      var lineEnd = 0; var textCount = 0; var i=0;
      if (text.length > lineLength){
        do {
            lineEnd = text.lastIndexOf(" ", textCount + lineLength); 
            textut = text.slice(textCount, lineEnd);
           
            ctx.fillText(textut, x, y+14*i);
            textCount = lineEnd + 1;
            i++;
            if (textCount + lineLength > text.length){
                textut = text.slice(textCount, text.length);
                ctx.fillText(textut, x, y+14*i);
                textCount = text.length;
            }
        } while (textCount < text.length);
    }else{
        ctx.textAlign = align;
      ctx.fillText(text, x, y+14*i); 
      ctx.strokeStyle = "white";
      ctx.strokeText(text, x, y+14*i);
      console.log(text + x + align); 
    }
}





    function krocker(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }

    function leaveCard(){
        gameObj[0].placeMe = true; 
    }
/*---------------------------------------------------------------
    ARRAY FUNCTiONs
----------------------------------------------------------------*/

function listArrayOrder(array){
    //array talar om vilken plats indexen har i nummerordning, låg till hög
    let k = 0;   let l = 0;  
    var indexOrdning = []; let L = array.length; let plac=0;
    for(k=0; k < L; k++){
        for (l = 0; l < L; l++){
            if (k != l){
                if (Number(array[k]) == Number(array[l])) { array[l] = Number(array[l]) + 0.001;}
                if (array[k] > array[l]) {
                    plac++;
                }
            }
        }
        indexOrdning[k] = plac;
        plac = 0; 
    }
return indexOrdning;
}


/*---------------------------------------------------------------
    DRAW FUNCTiONs
----------------------------------------------------------------*/
    
    var iData;
    function setScreenImage(){
      //  var ctx = myGameArea.context;
        console.log("click");
          iData = ctx.getImageData(0, 0, 400, 400);

    }
    function drawScreenImage(){
        
         var ctx = myGameArea.context;
        ctx.putImageData(iData, 0, 0);
    }

    function fallDrawer(x, y, width, hight, size){
       
        let sizer  = {};
        let justX = size * width - size; 
        let justY = size * hight - size; 
        x = x + width / 2;
        y = y + hight / 2;
        sizer.x = x - justX / 2;
        sizer.y = y - justY / 2;
        sizer.width = justX;
        sizer.hight = justY;
        return sizer;
    
      }

/*---------------------------------------------------------------
    MATH FUNCTION
----------------------------------------------------------------*/
    function pyth(a, b){
        let x =Math.abs(gameObj[a].x - gameObj[b].x);
        let y = Math.abs(gameObj[a].y - gameObj[b].y);

        return Math.sqrt(x*x + y*y)

    }

    function angle(a,b){
        let x = gameObj[a].x - gameObj[b].x;
        let y = gameObj[a].y - gameObj[b].y;
        return Math.atan2(y, x) * 180 / Math.PI;

    }

    function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
