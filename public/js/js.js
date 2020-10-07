var mapImages=[];
var cardImages = []; 
var bookImages = [];

var historik=[];
var vilketObjAction;
var ctx = myGameArea.context;
let magStigIndex=-1;
let drawFunc;
let temp; let tempArray = [];


let val = 1;
let doeden = [];
/*
for (let i = 364; i > 300; i--){
    val = val * i/365;
console.log(366 - i + ": " + val * 100);
}*/



const NSVO=["norr","soder","vast","ost"]; //soder
const inverseNSVO=["soder","norr","ost","vast"];
const NSVO2=["norr","soder","vaster","oster"]; //soder

function invNSVO(vaderstrack){
    console.log(vaderstrack)
    if (vaderstrack=="jump") return "jump";
    for (i=0; i<4; i++){
        if (vaderstrack == NSVO[i]) break;
    } 
     console.log("return", inverseNSVO[i])
    return inverseNSVO[i];
}

var xspecial;
var imageObj = new Image();
var doFunc; 

var gameStatus = [];
gameStatus.push(startMeny);

var figur=[];
var moving = false;
let preloader = 0;

function startGame(){
    //if (preloader == 1){
        console.log("StartGame");
        gameObj.push(edgeNorr, edgeSoder, edgeOster, edgeVaster);
        myGameArea.start();
   // else
     //  {preloader++;} 
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
    ctx.fill();
}


var ajaxQueue=0;
let listOfFunc = [];
let hitIndex;


//--------------
let movepause = false;
let moveOn = true;

function move(){
  
    if (moveOn == false) return moveOn;
    updateGameArea();
    return moveOn;
}
//---------------


function startMeny(){
    wood = new Wood(81); 
    //setDraw("jump");
    console.log("start", wait);
    ctx = myGameArea.context;
    ctx.drawImage(bookImages[0],0,0,400,400)
    button.push(new Button(story, 50, 300, "Intro")); 
    button.push(new Button(start, 250, 300, "Snabbstart")); 

    return false;
}

function story(){
    console.log("ja", bookImages.length);
    let contin = book.read();
            ctx.drawImage(knapp, 10, 10);

      button.push(new Button(story, 20, 300, "Intro")); 
    button.push(new Button(start, 250, 300, "Snabbstart")); 

    //if (contin == true) return true;
    return false;
}

function start(){
    //wood = Wood(81); 
        waitFor(nyruta.bind(this, "jump", 81))

    //setDraw("jump");
    console.log("start2");
    //button.push(new Button(move, 150, 170, "Start")); 
    return false;
}






function diceRuta(){
   // movepause = true;
    gameObj[hitIndex].drawRuta();
    return false;
}


//function runStatusar(value, index, array){

/*-------------------------------------------
Loop function
--------------------------------------------*/

let turnklar = true;
let wait =[];
let waitKlar = "story"; 
let aaa=0;

function loop(){
//aaa++;
//if (gameStatus.length> 0)
    //console.log(gameStatus);
  //  if (aaa%200){console.log(wait); aaa=0;}
    let igen = false;
    if (turnklar == true){
        turnklar = false; 
        if (movepause == true) {
            gameStatus.unshift(removeMove);
            console.log("movePause kanske läge byta till waitFor" );
            //moveOn = false;
        }
        
        if (gameStatus[0] == undefined)  gameStatus.splice(0, 1);
        if (gameStatus.length > 0){
            //console.log(gameStatus);
            igen = gameStatus[0]();
            if (igen == true) gameStatus.push(gameStatus[0]);
            gameStatus.splice(0, 1);
        }
    }
    turnklar = true;
    
}    



function removeMove(){
    console.log("RM++++");
    console.log( gameStatus);

    
    
   
    var arrayEnd = gameStatus.length ; 
    let array = []; 

    for (var i = 0; i < arrayEnd; i++){  
        if (gameStatus[i].name != "move") {
            array.push(gameStatus[i]); 
        }
    }
    gameStatus = [];
    gameStatus = array;
   for (var i = 0; i < gameStatus.length; i++){ 
    console.log("del move kvar: " + gameStatus[i].name);
   }
    movepause = false;  
    return false; 
}

function waitFor(func){
    console.log("xxxxxxx",func.name);
    gameStatus.push(func);
   wait.push(func.name);
   moveOn = false;
}

function notWaiting(klar = "NN"){ 
//let index;
console.log("--------notWaiting", klar);
console.log(wait);


//index = wait.findIndex(obj => obj["namn"] == klar);
 
    index = wait.findIndex(zz => zz == klar);

       
    if (index == -1 && wait.length > 0) index = 0; 
   
    wait.splice(index, 1);
    console.log("W",wait);
    
    if (wait.length == 0){
      switch (waitKlar){
            case "book":
                gameStatus(story);
                waitKlar = "move";
                break;
            default:
                moveOn = true; 
                console.log("wfKLar"); 
            gameStatus.push(move)
    };
}
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
        drawEffekt();
}

let listaEffekt = [];
function drawEffekt(){
    let deletelista = []; del = false;
    for (i=0; i < listaEffekt.length; i++){
        del = listaEffekt[i].draw();
        if (del == true) deletelista.push(i);
        
    }
    for (i = deletelista.length-1; i >-1; i--){
        listaEffekt.splice(deletelista[i],1);
    }
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

    //byta figur
    deleteObjects();
    deleteObject("Prinsen");
    ajaxer(figurer[1].url , "Narr");
    waitFor(nyruta.bind(this, "jump", 81))
     



    //flytta tillbaka till nummer 81

    
  console.log("SI");
console.log(gameObj);
   
    
  
   // setDraw("soder");
    
    //göra gravplats
   
   
    }



function diceFunc(){console.log("df"); queue.push(diceRuta);}
var hittad;
var figurImg; var figurRubrik; var figurText; var figurAction = ""; var figurButton = "";



function drawRuta(rubrik="tom", text="tom", img="tom", buttons="tom"){
    console.log("dr");
    console.log(gameStatus);
    console.log(buttons);
    //movepause=true;
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
    textWriter(rubrik, x + rutaBG.width/2, y + 30, 26, "white", "center");
    textWriter(text, x+30, y+50, 26, "black");
    let bhsY = y + 200 - buttons.length * 50;
    for (var i = 0; i < buttons.length; i++){
        button.push(new Button(buttons[i].action, x+190, bhsY + i * 50, buttons[i].text));
    }
   
}

function drawDiceRuta(text, img, buttons, bonus = 0){
    //svamp,
    console.log(text.rubrik);
    console.log(text.rubrik + "diceRuta");
    var x=50;
    var y=100;
    ctx = myGameArea.context;
    ctx.drawImage(rutaBG, x, y);
    ctx.drawImage(img, x+6, y+92, 100, 100);
    textWriter2(text.rubrik, 200, y + 30, {lineLength: 26, color: "white", align: "center", strokeColor: "white"});
    textWriter2(text.brod, x+30, y+54, {lineLength: 26, color: "black"});
    if (gameObj[hitIndex].bonus) drawBonus(x+130, y+140);
    if (gameObj[hitIndex].T6 > 0) drawDice(x+115, y+160,0, gameObj[hitIndex].T6, bonus);
    console.log(buttons);
    let bhsY = y + 200 - buttons.length * 50;
    for (var i = 0; i < buttons.length; i++){
        button.push(new Button(buttons[i].action, x+190, bhsY + i * 50, buttons[i].text));
    }

}



function dice(d){
        return Math.floor(d * Math.random() + 1);
    }

let t6Ruta = {
    //0: enemy 1:player   
    reset: function(){
        this.buttons = [];
        this.img = gameObj[hitIndex].img;
        this.T6 = 0;
        this.bonus = 0;
        
        this.text = {};
    },
   
    draw: function(){
         var x=50;
        var y=100;
        ctx = myGameArea.context;
        ctx.drawImage(rutaBG, x, y);
        ctx.drawImage(this.img, x+6, y+92, 100, 100);
        textWriter2(this.text.rubrik, 200, y + 30, {lineLength: 26, color: "white", align: "center", strokeColor: "white"});
        textWriter2(this.text.brod, x+30, y+54, {lineLength: 26, color: "black"});
        if (this.bonus != 0) drawBonus(x+130, y+140);
        if (this.T6 > 0) drawDice(x+115, y+160,0, this.T6, this.bonus);
        
        let bhsY = y + 200 - this.buttons.length * 50;
        for (var i = 0; i < this.buttons.length; i++){
            button.push(new Button(this.buttons[i].action, x+190, bhsY + i * 50, this.buttons[i].text));
    }
}
}

let stridRuta = {
    //0: enemy 1:player   
    reset: function(){
        this.buttons = [];
        this.img = [gameObj[hitIndex].img, gameObj[0].img];
        this.T6 = [0,0];
        this.styrka = [];
        this.harts = [];
        this.bonus = [];
        this.rubrik = "";
        this.text = "";
    },
   
    draw: function(){
        ctx = myGameArea.context;
        ctx.drawImage(this.img[0], 120, 0, 160, 180);
        ctx.drawImage(this.img[1], 114, 240, 183, 170);
        ctx.drawImage(combatBG, 0, 0, 400,400);
        drawStyrka(hitIndex, 100, 90);
        drawStyrka(0, 100, 340);
        drawHarts(hitIndex, 285, 15);
        drawHarts(0, 285, 365);
        textbox(this.brod, {color:"red"}, 20, 50, 60);
        textWriter(this.rubrik, 20, 30, 26, "black" ,"left");
         if (gameObj[hitIndex].T6 > 0){ 
            drawDice(x+135, y+228, 0, gameObj[0].T6);
            drawDice(x+250, y+138, 1, gameObj[hitIndex].T6);
            drawResultFight();
        }
        let bhsY =  300 - this.buttons.length * 50;
        for (var i = 0; i < this.buttons.length; i++){
            button.push(new Button(this.buttons[i].action, 300, bhsY + i * 50, this.buttons[i].text));
        }
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






var cardAction;





function getIndexGameObj(namn){
            var index = gameObj.findIndex(zz => zz["namn"] == namn);
            return index;
}

function getKartbitCard(input){
    console.log(map);
            var index = map.findIndex(zz => zz["card"] === input);
            return index;
}

function getIndex(input){
            var index = gameObj[0].findIndex( function(index) {return index["upgrades"] ==="Mimers Brunn";} );
            return index;
}

function deleteObject(namn){
    console.log("AAA", namn);
    var nummer = gameObj.findIndex(function(index) {return index["namn"] === namn; });
     gameObj.splice(nummer, 1); 
     zeta = true; 
}


let hitObjects = 0;  

function deleteObjects(){
     console.log("--- delete obj");
   //console.log(gameObj);
     let hitObjects = 0;
    if (gameObj.length > 5) {gameObj.splice(5, gameObj.length - 5);}

   //console.log("---");
   //console.log(gameObj);

    kartObj.splice(1, kartObj.length - 1);
    mapImages.splice(mapImages.length - 1);
    kartObj.push({
        namn: "meny",
        miljo: false, figur : false, info: true, floor: 0,
        draw: function(){
            drawMeny();}
    });    

    if (cardImages.length>0) cardImages.splice(0, cardImages.length)

}

function ajaxer(url, name = "NN"){
     console.log(wait); 
    console.log("url" + url); 
        getFile(url);
        wait.push(name);
     //   getFile(url, {}, function(abc){console.log("JAAAAA");});
       

}
//
function mapChange(vaderstrack, nyRuta){
    //let xtra;
    //if (vaderstrack=="Narr"){xtra = vaderstrack; vaderstrack="jump"; }; 
    console.log("v n",vaderstrack, nyRuta);
   deleteObjects();
    historik.push(wood.mapNR);

    if (nyRuta==1000){
        nyRuta = countMap(wood.mapNR, vaderstrack);
    }
    console.log("NR", nyRuta);
    wood.update(nyRuta);
     console.log("v n x",vaderstrack, nyRuta);
     console.log(wood);
    setFloor(vaderstrack); // kan förbättras
    closeOpenDoor();

    
    setDraw(invNSVO(vaderstrack));
     
    var nyttCard = map[wood.mapNR].card;
    
   
    if (nyttCard == 0 || nyttCard > 1){
        
        if (card[nyttCard].url) {
           wait.push(card[nyttCard].namn);
           
            getFile(card[nyttCard].url);
        }

        }
     console.log("GGG",wood.mapNR)    
    
}

function closeOpenDoor(){
    gameObj[1].open = true;
    gameObj[2].open = true;
    gameObj[3].open = true;
    gameObj[4].open = true;
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

function laddabilder(namn, url, typ){
   console.log(namn);
    wait.push(namn);
    if (typ == "card"){
        cardImages.push(new Image());
        cardImages[cardImages.length-1].addEventListener("load", notWaiting.bind(namn))
        cardImages[cardImages.length-1].scr = url;
    }
    if (typ == "map"){
        mapImages.push(new Image());
        mapImages[mapImages.length-1].addEventListener("load", notWaiting.bind(namn))
        mapImages[mapImages.length-1].scr = url;
    }
    if (typ == "book"){
        bookImages.push(new Image());
        bookImages[bookImages.length - 1].addEventListener("load", notWaiting.bind(namn))
        bookImages[bookImages.length - 1].scr = url;
    }
    console.log(wait);
}

var colorMinne;


// funkar inte
function xgetRGB(x, y){ //maj 20
   //console.log(x+ " " +y);
    var cString; var c=[];
    c = ctx.getImageData(x, y, 1, 1).data;
    cString=c[0]+" "+c[1]+" "+c[2]; 
    return cString;
}

function xgetRGBa(x, y){
   //console.log(x+ " " +y);
    var cString; var c=[];
    c = ctx.getImageData(x, y, 1, 1).data;
    cString=c[0] + " " + c[1] + " " + c[2] + " " + c[3]; 
    return cString;
}

function getWhite(size = 100){
    //hitte en vit plats på rutan
    var ab = 0;
do {
    var a = Math.floor(Math.random() * 300) + size/2;
    var b = Math.floor(Math.random() * 300) + size/2;     
    color = getRGB(a,b);
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
function spiral2(){
    let xy = [];
    for (i=0; i < 500; i++){
        angle = .5 * i;
        x = (1 + angle) * Math.cos(angle);
        y = (1 + angle) * Math.sin(angle);
        xy.push({x:x, y:y});
    }

return xy;
 
}



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
    console.log("gammal byt till textWriter2");
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
      
    }
}

const t_Georgia16 = "16px Georgia";

function textWriter2(text, x, y, ins){
    ctx.font = t_Georgia16;
    

    var textut; let lineLength = 40;
    if (ins.align) ctx.textAlign = ins.align; else ctx.textAlign = "left";
    if (ins.color) ctx.fillStyle = ins.color; else ctx.textAlign = "white";
    if (ins.lineLength) lineLength = ins.lineLength
    if (ins.strokeColor) ctx.strokeStyle = ins.strokeColor; else ctx.strokeStyle = '#000';;
    
    

    if (text == undefined) text = "Du är i Trollskogen";
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
                if (ins.strokeColor)  ctx.strokeText(text, x, y+14*i); 
                textCount = text.length;
            }
        } while (textCount < text.length);
    }else{
        
        ctx.fillText(text, x, y+14*i);
       if (ins.strokeColor)  ctx.strokeText(text, x, y+14*i); 
       
    }

}

function radbrytare(text, radlangd){
    var lineEnd = 0; var textCount = 0; var i=0;
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
    let arr=[];
    for (k=0; k<indexOrdning.length; k++){
        arr.push(indexOrdning.findIndex(zz => zz == k));
    }
return arr;
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

      function setnohit(index){
        zeta=true;
        let figur = gameObj[index];
        figur.z=[5, 5.1];
        figur.hitAreaX=420;
        figur.hitAreaY=420;
      }

/*---------------------------------------------------------------
    MATH FUNCTION
----------------------------------------------------------------*/
    function pyth(a, b){
        let x =Math.abs(gameObj[a].x - gameObj[b].x);
        let y = Math.abs(gameObj[a].y - gameObj[b].y);

        return Math.sqrt(x*x + y*y)

    }
       function pythXY(a, b){
        let x = Math.abs(a.x - b.x);
        let y = Math.abs(a.y - b.y);

        return Math.sqrt(x*x + y*y)

    }

    function angleXY(a,b){ //start? obj b:origo 
        retur = {};
        let x = a.x - b.x;
        let y = a.y - b.y;
        retur.grader = Math.atan2(y, x) * 180 / Math.PI;
        retur.rad = Math.atan2(y, x);
        return retur;
        
    }

    function angle(a,b){ //start?
        let x = gameObj[a].x - gameObj[b].x;
        let y = gameObj[a].y - gameObj[b].y;
        return Math.atan2(y, x) * 180 / Math.PI;

    }

    function getVaderstrack(grader){
        if (Math.abs(grader) < 45){return "oster";}
        if (Math.abs(grader) > 135){return "vaster";}
        if (grader>0) return "soder";
        return "norr";
}

    function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
