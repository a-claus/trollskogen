
var mapImages=[];
var cardImages = []; 
var historik=[];
var vilketObjAction;
var ctx = myGameArea.context;
let magStigIndex=-1;
let drawFunc;
let temp;



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
    console.log("SSSSTART");
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
let turnklar = true;

function loop(){
    
       
//console.log(gameStatus);  





let igen = false;
if (turnklar == true){
   turnklar = false; 
   if (gameStatus.length > 0){
   if (movepause==true) {
    var array= [];
    for (var i=0; i < gameStatus.length; i++){
        if (gameStatus[i].name != "move"){
            array.push(gameStatus[i]);
        }
    }
    gameStatus = array;
    console.log(gameStatus);  
    movepause = false;
}}
  if (gameStatus[0] == undefined)  gameStatus.splice(0, 1);
    if (gameStatus.length > 0){
        igen = gameStatus[0]();
        if (igen == true) gameStatus.push(gameStatus[0]);
        gameStatus.splice(0, 1);
    }
}

    
    turnklar=true;
}    




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
    if (bagger.index>-1){ctx.drawImage(bagger.image,40,350,26,35);}
}

function drawStyrka(index,x,y){
     ctx = myGameArea.context;
    ctx.drawImage(ICONstyrka, x, y); //10,10;
    ctx.fillStyle="white";
    ctx.fillText(gameObj[0].styrka, x+21, y+28);}

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
    //lotta kort
    crupier = lottaCards();
    blanda = shuffle();
    //lotta ny karta
    makeMap();
   
    }


function moveStart(){ movepause = false; gameStatus.push(move); return false;}
function moveFunc(){leaveCard(); movepause = false; gameStatus.push(move); return false;}

function diceFunc(){console.log("df"); queue.push(diceRuta);}
var hittad;
var figurImg; var figurRubrik; var figurText; var figurAction = ""; var figurButton = "";

function xdrawRuta(){
    var x=50;
    var y=100;
    var act;
    ctx.drawImage(rutaBG, x, y);
    ctx.drawImage(figurImg , x+6, y+92,300,100); //bilden på figur
    textWriter(figurRubrik, x + rutaBG.width/2, y + 30, 26, "center");
    //textWriter(figurRubrik, x+30, y+30, 26, "black");
    textWriter(figurText, x+30, y+50, 26, "black");
    button.push(new Button(figurAction, x+190, y+150, figurButton));
}

function drawRuta(rubrik="tom", text="tom", img="tom", buttons="tom"){
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
}

function drawDiceRuta(text, img, buttons, T6 = 0, bonus = 0){
    console.log(text.rubrik);
    var x=50;
    var y=100;
    ctx = myGameArea.context;
    ctx.drawImage(rutaBG, x, y);
    ctx.drawImage(img, x+6, y+92, 100, 100);
    textWriter(text.rubrik, x + rutaBG.width/2, y + 30, 26, "center");
    textWriter(text.brod, x+30, y+50, 26, "black");
    if (T6 > 0) drawDice(x+125, y+160,0, T6-1, bonus);
    console.log(buttons);
    let bhsY = y + 200 - buttons.length * 50;
    for (var i = 0; i < buttons.length; i++){
        button.push(new Button(buttons[i].action, x+190, bhsY + i * 50, buttons[i].text));
    }

}

var diceText; var T6=[]; var T6text=[]; var T6actions=[]; var diceBonus;
var diceStatus; var diceRubrik;  var diceImg; var buttons;

function xdrawDiceRuta(){
    var x=50;
    var y=100;
    var act;
    ctx.drawImage(rutaBG, x, y);
    ctx.drawImage(diceImg , x+6, y+92, 100,100); //bilden på figur
    var T6slag = Math.floor(Math.random() * 6); 
    console.log( "T6: " + T6slag);
    var bonus;
        switch (diceBonus){
            case "iq":
                //drawIQ(0, x+88, y+140);
                bonus = gameObj[0].iq;
            break;
            default:
                bonus = 0; 
    }
 
for (var i=0; i < T6actions.length; i++){ 
    if (T6slag + 1 +bonus >= T6[i]) {break;}
}


    
 
if (i==0) act = "vinst";
if (i==1) act = "repeat";
if (i==2) act = "lose";

if (diceStatus == "start"){
    act = "start"; 
    i = 3;
    diceStatus="dice"; 
}

textWriter(diceRubrik, x + rutaBG.width/2, y + 30, 26, "center");
console.log("I"+ i);
for (var j=0; j<buttons[i].length; j++){
    
    button.push(new Button(T6actions[i][j], x+190, y+100+j*50, buttons[i][j]));
  
}

textWriter(T6text[i][0], x+30, y+50, 26, "black");




if (i!=3){
//----- draw bonus -------
    
        switch (diceBonus){
            case "iq":
                drawIQ(0, x+88, y+140);
                bonus=gameObj[0].iq;
            break;
            default:
                bonus = 0; 
    }
    //----- draw dice ---------
    drawDice(x+125,y+160,0,T6slag, bonus);
}


}



function drawDice(x, y, index, tSlag, add){
    var b= tSlag + add + 1;
    if (index != 0){a=+6;} //tärningsfärg
    ctx.drawImage(imgTarning, spriteTarning.T[tSlag][0],spriteTarning.T[tSlag][1],spriteTarning.T[tSlag][2],spriteTarning.T[tSlag][3], x,y,30,30);
    
     ctx.fillText(b, x+35, y+20);
}

function drawCombatRuta(typ="start"){
    //ändra spå monster inte är ett i combatruta
    var x=50;
    var y=100;
    ctx.drawImage(rutaBG, x,y);
    ctx.drawImage(ICONstyrka, 10+x, y+10);
    ctx.drawImage(ICONstyrka, 220, y+10);
    var antalRoda;
    
// ctx.drawImage(r_hart, 217+x+i*20, y+45);
    
    ctx.font="16px Georgia";
    ctx.fillText(figur[0].namn, x+60, y+40);
    ctx.fillText(figur[1].namn, 270, y+40);
    ctx.fillStyle="white";
    ctx.fillText(figur[0].styrka, x+31, y+38);
    ctx.fillText(figur[1].styrka, x+191, y+38);

switch (typ){
    case "start":
        button.push(new Button("dice",x+160,y+140,"Slåe"));
    break;
    

    case "mice":
        figur[0].x=figur[0].x-20;
        GSD = "move";

    break;

    case "dice":
       // if (typ=="dice"){
    var a=Math.floor(Math.random() * 6); 
    var b=Math.floor(Math.random() * 6)+6;
    ctx.drawImage(imgTarning, spriteTarning.T[a][0],spriteTarning.T[a][1],spriteTarning.T[a][2],spriteTarning.T[a][3], 20+x,200,30,30);
    ctx.drawImage(imgTarning, spriteTarning.T[b][0],spriteTarning.T[b][1],spriteTarning.T[b][2],spriteTarning.T[b][3], 225,200,30,30);
    a=a + figur[0].styrka+1;
    b=b + figur[1].styrka-5;
    ctx.fillText(a, x+55, 220);
    ctx.fillText(b, 260, 220);
    if (a>b){figur[1].skada=figur[1].skada+1;}
    if (a<b){figur[0].skada=figur[0].skada+1;}
    if (a==b){figur[1].skada=figur[1].skada+.5; figur[0].skada=figur[0].skada+.5; }  
    

   
    button.push(new Button("dice",x+170,y+150,"Slåa")); 
    button.push(new Button("move",x+60,y+150, "Fly")); 
    break;
}
figur[0].x=190; figur[0].y=190;
figur[1].x=150;
drawHarts(0,58+x,y+45);
drawHarts(1,217+x,y+45);

    if ((figur[0].liv-figur[0].skada)<=0){ 
        downMeny.setPic(rip);
        downMeny.setText("Prinsen blir kvar i skogen för evigt.");
        gameStatus.push("panel");
    } 
    
    if ((figur[1].liv-figur[1].skada)<=0){
        
        if (isNaN(figur[1].vinst)==false){
            figur.push(new Sak(figur[1].vinst));  
            console.log("fig" + figur.length); 

        }
        killFigur(1);
        //gameStatus="panel";
        GSD = "move";
    }  
}
var flyingObj = []; //{pos: destination: img:}

function drawFlyingObject(id=0){
    console.log("fo" +flyingObj.length);
    var dx = flyingObj[id].destinationX - flyingObj[id].posX; //-10
    var dy = flyingObj[id].destinationY - flyingObj[id].posY; //10
    
    var konstX=Math.abs(dx/dy);
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
    for (var i=0; i < gameObj[0].liv; i++){
        antalRoda = gameObj[0].liv - gameObj[0].skada-i;
       
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



function drawRoads(karta, width=50, height=50, color="white"){
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



function drawBro(karta){
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


function monsterMove(num){
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
            var index = gameObj.findIndex(zz => zz["namn"]==input);
            return index;

}


function getIndex(input){
            var index = gameObj[0].findIndex( function(index) {return index["upgrades"] ==="Mimers Brunn";} );
            return index;

}

function deleteObject(vad){
    
    var nummer= gameObj.findIndex(function(index) { return index["namn"] === vad; });
    console.log(nummer);
     gameObj.splice(nummer, 1);
    
}


let hitObjects = 0;    
function deleteObjects(){
     let hitObjects = 0;
    if (gameObj.length>1) {gameObj.splice(1, gameObj.length - 1);}

   
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
    //console.log(vaderstrack);
   deleteObjects();
   //kartObj[0].newRuta=1; // xyz
    historik.push(wood.mapNR);

    var nyRuta = countMap(wood.mapNR, vaderstrack);
    //console.log("a:"+ nyRuta + vaderstrack);
    wood.update(nyRuta);

    
    setFloor(vaderstrack);
    var nyRuta = wood.mapNR;
    
    wood.vaderstrack=invNSVO(vaderstrack);
    setDraw(invNSVO(vaderstrack));

    var nyttCard = map[wood.mapNR].card;
    
   // if (nyRuta==81) imageObj.src=map[81].bild;
   
    if (nyttCard == 0 || nyttCard>1){
        
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

function moveFigurOK(x,y){
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

function drawImage(image, x, y, scale=1, rotation=0){
    console.log("DI");
    ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    ctx.rotate(rotation);
    ctx.drawImage(image, - image.width / 2, -image.height / 2);
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
      ctx.fillText(text, x, y+14*i);  
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
