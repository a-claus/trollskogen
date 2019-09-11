let sakImg=[];

let bagger = [];
let bagAktiv = -1;
bagger[-1] = {undo: function(){conseole.log("BagClick var en tom bag")}};


function changeThing(){
    console.log("change" + bagger.length);
    if (bagger.length > 0) {
        bagger[bagAktiv].undo
        bagAktiv++;
        if (bagAktiv == bagger.length) bagAktiv = 0;
        bagger[bagAktiv].do;
    }
}

class Sak{
    constructor(){
    this.active = false;
   // this.clickFunc = function() {console.log("change");changeThing()};

    this.dragFunc = function() {};
    this.do = function() {};
    this.undo = function() {};
    
    this.sak;
    this.img;

//----------OLD
          //  this.nr=nr;  
           // console.log("Nummer"+this.nr);
           // this.vad = thing[this.nr].vad;
           // this.arrayLista = "thing";
           // this.namn = thing[this.nr].namn;
           // this.card = thing[this.nr];
           // this.width = thing[this.nr].width;
           // this.height = thing[this.nr].height;
           // this.color = thing[this.nr].color; 
       }


}



/*
class Bagger{
    constructor(){

        this.innehall = [];
        this.index = -1; 
        this.img;
        this.iHand = "";
        this.i = false; //xyz
       // this.func = function(){};
        this.clickFunc;
        this.dragFunc;
    }

    setBagImg(){
        var iHand;
        if (this.index == undefined){this.index = this.innehall.lengt-1;} //why
       
        if (this.index != -1){
            console.log(thing);
            console.log(this.index, thing[this.index].vad);
            iHand = thing[this.innehall[this.index]].plus;
            thing[this.index].bagFuncSetter(); 
            upgradeFigur(iHand, false);
            }
        
        this.index++;

        if (this.index >= this.innehall.length) {this.index = 0;}
        iHand = thing[this.innehall[this.index]].plus;
        this.img = thing[this.innehall[this.index]].img;
        upgradeFigur(iHand);
    }
    
     sput(vad, ha="click"){

            if(this.innehall.includes(vad) == false){
                    this.innehall.push(vad);}
            if (this.index == -1){
                this.setBagImg(); 
                this.i = true;
               // if (ha == "click")
                 haPush();
               // if (ha == "drag") dragPush();
            }
            console.log(this.index);
    }
    
     
     get image(){
        return this.img;
    }

}

*/
//var bagger = new Bagger();

function xhaPush(){
    //    dragAction : function(){
   hitArea.push({x:35, y:360, width:80, height:35, action:function() {bagger.setBagImg()}}); 
}

function xdraghaPush(){
    //    dragAction : function(){
   dragHitArea.push({x:35, y:360, width:80, height:35, action:function () {bagger.setBagImg()}}); 
}

function upgradeFigur(iHand, positiv=true){
    console.log("old");
    bagupgrade(iHand, positiv);
}


function bagupgrade(iHand, positiv=true){

        if (positiv==false) iHand="minus_"+ iHand;
        
       

            switch (iHand){
                case "styrka": gameObj[0].styrka++; break;
                case "minus_styrka": gameObj[0].styrka--; break;

                case "liv": gameObj[0].skada=0; break;
                case "harts": gameObj[0].liv++; break;
                case "minus_harts": gameObj[0].liv--; break;
                case "jump": gameObj[0].jumper++; break;
                case "minus_jump": gameObj[0].jumper--; break;
                case "iq": gameObj[0].iq++; break;
                case "minus_iq": gameObj[0].iq--; break;
                case "func": bagger.func();
                    //gameObj[0].bagFunc(); 
                    break;
               // case "minus_func": figur[0].bagFunc = function(){console.log("minusFunc");};break;
                default: console.log("ingen upgrade");

            }
        }

class Figur {
    constructor(){
   // this.colorMinne;
      
       //  console.log("figur"+ nr + this.nr);
        this.speedX = 0;
        this.speedY = 0;
        this.x=185;
        this.y=120;
        this.floor=1;  
        this.vaderstrack="soder";  }

    update(){

        if (this.speedX<0){this.vaderstrack="oster";}
        if (this.speedX>0){this.vaderstrack="vaster";}
        if (this.speedY<0){this.vaderstrack="norr";}
        if (this.speedY>0){this.vaderstrack="soder";}
        
        this.x += this.speedX;
        this.y += this.speedY;

        
        if (this.status=="jump") {this.jump();}
console.log("figurUpdate");
        //if ( .vad){
            if (this.x<2) {this.x=380;  mapChange("vast");}
            if (this.x>386) {this.x=0;  mapChange("ost");} //xyz x ska kunna bli 400. Någonstans har jag gjort ett tak.
            if (this.y<2) {this.y=380;  mapChange("norr");}
            if (this.y>400) {this.y=0;  mapChange("soder"); }    
        //}
    }

    draw(){
     
        if (this.arrayLista=="hero"){
            drawPlayerSprite(this.vaderstrack, this.x, this.y);
        }
        else {
            if (card[this.nr].hasOwnProperty("img")==true){
                  /*  ctx.beginPath();
                   
                    ctx.arc(this.x+50,this.y+50,30,0,2*Math.PI);
                     ctx.fillStyle = "rgb(220,220,220)";
                    ctx.fill();

                     ctx.arc(100,100,30,0,2*Math.PI);
                     ctx.fillStyle = "rgba(220,220,220,0)";
                    ctx.fill();*/
                    
               
                    ctx.drawImage(this.img, this.x, this.y);
                }
            else{

                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.width, this.height);}}
        }



    kill(index){
        console.log("killingFigur:"+index);
        this.splice(index);
    }
}
thing = [];
class xSak extends Figur{
    constructor(nr){
            super();
            this.nr=nr;  
            console.log("Nummer"+this.nr);
            this.vad = thing[this.nr].vad;
            this.arrayLista = "thing";
            this.namn = thing[this.nr].namn;
            this.card = thing[this.nr];
            this.width = thing[this.nr].width;
            this.height = thing[this.nr].height;
            this.color = thing[this.nr].color;   
    }
}
    

class Player extends Figur{
    constructor(){
        super();
        this.arrayLista="hero";
        this.nr=0;
        this.card=hero[this.nr];
         this.width = hero[this.nr].width;
        this.height = hero[this.nr].height;
        this.color=hero[this.nr].color;
        this.namn=hero[this.nr].namn;

       
        this.bag=[];
        this.weapon=[];
        this.dress=[];
        this.newRuta=0; 
        this.liv=hero[this.nr].liv;
        this.skada=0;
        this.styrka=hero[this.nr].styrka;
        this.iq=hero[this.nr].iq;
        this.magi=hero[this.nr].magi;

        this.status="walk";
        this.varv=0;
        this.jumper=0;
        this.adders=[];
        //this.bagFunc = func(){console.log("bagFunc");};

        }
    bagFunc(){

    }

    changeKartbit(){
        this.x += this.speedX;
        this.y += this.speedY;
        
        
        if (this.x<0) {this.x=400; wood.mapNum++;}
        if (this.x>400) {this.x=0; wood.mapNum++;}
        if (this.y<0) {this.y=400; wood.mapNum++;}
        if (this.y>400) {this.y=0; wood.mapNum++;}  
    }

    jump(){
        
        var parabel=[5,3,2,1,0,-1,-2,-4,-8, 4, -2, 2];
      
      
        this.width+=parabel[this.varv];
        this.height+=parabel[this.varv];
          this.varv++;
       if (this.varv==parabel.length){
          this.varv=0
          this.status="walk";
        if (this.jumper==0) {this.skada+=.5;}

       }

    }
    upgrade(iHand, positiv=true){

        if (positiv==false) iHand="minus_"+ iHand;
        
       

            switch (iHand){
                case "styrka": gameObj[0].styrka++; break;
                case "minus_styrka": gameObj[0].styrka--; break;

                case "liv": gameObj[0].skada=0; break;
                case "harts": gameObj[0].liv++; break;
                case "minus_harts": gameObj[0].liv--; break;
                case "jump": gameObj[0].jumper++; break;
                case "minus_jump": gameObj[0].jumper--; break;
                case "iq": gameObj[0].iq++;break;
                case "minus_iq": gameObj[0].iq--;break;
                case "func": gameObj[0].bagFunc(); break;
               // case "minus_func": figur[0].bagFunc = function(){console.log("minusFunc");};break;
                default: console.log("ingen upgrade");

            }


    }
}

//--------------------------------------------------------------------------
class Monster extends Figur{
    constructor(nr){
        super();

        this.nr=nr;  
        this.arrayLista="card";
      
        this.vad=card[this.nr].vad;
        this.card=card[this.nr];
        if (card[this.nr].vad=="monster")
            {this.isMover=true;}
         else 
            {this.isMover=false;}
        
         if (card[this.nr].hasOwnProperty("img")==true){
            console.log("Visst har jag img");
            this.img=card[this.nr].img;
            this.vinst=card[this.nr].vinst;
            this.width= this.img.width;
            this.height=this.img.height;

         }
         else{
            this.width = card[this.nr].width;
            this.height = card[this.nr].height;
            this.color=card[this.nr].color;}
        this.namn=card[this.nr].namn;   
        this.vinst=card[this.nr].vinst;
            if (isNaN(card[this.nr].liv)==false){
                this.liv=card[this.nr].liv;
                this.skada=0;
                this.styrka=card[this.nr].styrka;
            }
   }
}



function killFigur(index){
figur.splice(index,1);
}


//-----------------------------------------------------
var bildColorForAction;
var bildaction;
var bild;
var dices = [];
var dicesText = [];

class Wood{
    constructor(mapNR){
         //_________________old
        this.varOnMap;
        this.floors=1;
       
        this.typ;
        this.mapNum=mapNR;
        //________________
        this.bildBG = new Image();
        console.log(mapNR);
        this.mapNR= mapNR;
        this.norr = map[mapNR].norr;
        this.soder=map[mapNR].soder;
        this.ost=map[mapNR].ost;
        this.vast=map[mapNR].vast;
        this.typ=map[mapNR].typ;
        this.namn=map[mapNR].namn;
        this.floors=map[mapNR].floors;
        this.kartbit=map[mapNR].kartbit;
        /*if (map[mapNR].hasOwnProperty("bildBG") == true){
            console.log("bild laddad");
            this.bildBG.src=map[mapNR].bildBG;
        }*/
     
    }
    update(mapNR){
          //_________________old
        this.varOnMap;
        this.pic;
        this.typ;
        console.log(" mapNR"+mapNR);
       // this.mapNum=mapNR;
        //________________
        this.mapNR=mapNR;
        
        this.norr=map[mapNR].norr;
        this.soder=map[mapNR].soder;
        this.ost=map[mapNR].ost;
        this.vast=map[mapNR].vast;
        this.typ=map[mapNR].typ;
        this.namn=map[mapNR].namn;
        this.floors=map[mapNR].floors;
//--------- new ------------
        this.kartbit=map[mapNR].kartbit;
        this.monster=map[mapNR].monster;
        if (map[mapNR].edge) {
            this.edge=map[mapNR].edge;}
        else
            { this.edge = "not";}

        if (mapNR==81) {
            this.vaderstrack = "soder";
            this.floors = 1;}

      // if (kartbit[this.kartbit].hasOwnProperty("func")==true){
        //    kartbit[this.kartbit].func();


 //   }

}

    addobject(index){
            bildColorForAction=actions[index].color;
            bildaction = actions[index].func;
            bild = actions[index].img;
    }

draw(floor){
    if (floor==1){
        myGameArea.clear();
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, 400, 400);}

if (floor <= this.floors){   
    switch(map[this.mapNum].typ){
        case "glanta":
            this.drawGlanta();  
        break;
        case "bro":
        // console.log(floor + " BRO x:" + kartObj[0].x + " y:" + kartObj[0].y );
            this.drawBro(floor);
        break; 
        case "start":
            ctx.drawImage(this.bildBG, 0, 0);
        break;
        case "glantaSp":
            this.drawGlanta();
            ctx.drawImage(bild, 150, 150);
        break;
    }
    }
   
}

  


  drawGlanta(){
            ctx.beginPath();
            ctx.arc(200, 200, 150, 0, 2*Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            drawRoads(this.mapNum);
        }

drawBro(floor){
       // NSVO inverseNSVO
    for (var i=0; i<5; i++){

        if(map[this.mapNum][NSVO[i]]==floor || map[this.mapNum][NSVO[i]]==(99)){
              //  console.log(map[this.mapNum][NSVO[i]]);
            if (NSVO[i]=="vast"){
                ctx.fillStyle="white";
                ctx.fillRect(0, 170, 200, 60);
                if(floor==1) {
                    ctx.fillStyle="rgb(120,120,120)";
                    ctx.fillRect(150,170,50,60);}
            }
            if (NSVO[i]=="ost"){
                ctx.fillStyle="white";
                ctx.fillRect(200, 170, 200, 60);
                if(floor==1) {
                    ctx.fillStyle="rgb(120,120,120)";
                    ctx.fillRect(200,170,50,60);}
            }
            if (NSVO[i]=="norr" || floor==99){
                ctx.fillStyle="white";
                ctx.fillRect(170, 0, 60, 200);
                if(floor==1) {
                    ctx.fillStyle="rgb(120,120,120)";
                    ctx.fillRect(170,150,60,50);}
                }
            if (NSVO[i]=="soder"){
                ctx.fillStyle="white";
                ctx.fillRect(170, 200, 60, 200);
                if(floor==1 || floor==99) {
                    ctx.fillStyle="rgb(120,120,120)";
                    ctx.fillRect(170,200,60,50);}
            }
        }
        if (i==4 && floor==2){
            
            if (map[this.mapNum].norr==2 || map[this.mapNum].soder==2)
                { ctx.drawImage(bro,150,150);}
            else
                {ctx.drawImage(broVO,150,150);}
                    
        }

            
    }
}
}

function inverseVaderstrack(vaderstrack){
    if (vaderstrack=="soder") return "norr";
    if (vaderstrack=="norr") return "soder";
    if (vaderstrack=="ost") return "vast";
    if (vaderstrack=="vast") return "ost";
}

function setFloor(vaderstrack){
    console.log(wood);
    vaderstrack = inverseVaderstrack(vaderstrack);

    console.log("sfsf "+ wood.kartbit);
        gameObj[0].floor = kartbit[wood.kartbit][vaderstrack];
        if (gameObj[0].floor > 99) gameObj[0].floor -= 100; //xyz
        if (gameObj[0].floor == 99) gameObj[0].floor = map[4].norr; //xyz
        if (gameObj[0].floor == 0) gameObj[0].floor = 1;  
}

function countMap(kartbit, vaderstrack){
    console.log("A" + kartbit + vaderstrack);
       switch (vaderstrack){
            case "norr":
                kartbit=kartbit - 9;
                if (kartbit < 0) kartbit = 81;
            break;
            case "soder":
                if (kartbit<81){
                kartbit=kartbit+9;}
                else
                {kartbit=4;}
            break;
            case "vast":
                kartbit=kartbit-1;
            break;
            case "ost":
               kartbit=kartbit+1;
            break;
        }
        return kartbit;
}


function drawRuta(){
    for (i = 0; i < fastaKartObj.length; i++){

    }
}



    
    
//----------------------------------------------------------------------------
class Button {
    constructor(action, x, y, text="Slå", width=100, height=40){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height = height;
        this.knappHit=false;
        this.action=action; //vilken gameStatus
       // this.func=buttonAction(action);
        var ctx = myGameArea.context;
        ctx.drawImage(knapp, x, y);
        ctx.fillStyle = "white";
        
        ctx.textAlign="center";
        for (var i=0; i<6; i++){
            ctx.font=16-i + "px Georgia"; 
            if (ctx.measureText(text).width< width) {break;}
    //ctx.font="16px Georgia";
        }
        ctx.fillText(text,x+width/2,y+25); //x+35
    
    }


    hit() {
       
                if (this.action == move) movepause = false; 
                gameStatus.push(this.action);
                
    }    

}

function upgradeIQ(){gameObj[0].iq++;}

function deleteButtons(){
    button.splice(0, button.length);
}

//----------------------------------------------------------------------------
class DownMeny{
    constructor(){
        this.text="";
        this.pic=imgTroll;
        this.buttonText="";
        this.action="move";
    }
     set(action,text,buttontext,pic){
        this.text=text;

        this.pic=pic;
        this.buttonText=buttontext;
        this.action=action;


     }
     setText(text){
        this.text=text;
    }
    setPic(pic){
        this.pic=pic;
        //iwidth,iheight
    }
    setButtonText(bt){
        this.buttonText=bt;
    }
    paintThis(){
      //  console.log("pt:" + this.action + "-" + this.buttonText + figur[0].x);
        ctx.drawImage(this.pic, 10, 400-this.pic.height);
        ctx.fillStyle = "rgba(0,0,0, .5)";
        ctx.fillRect(0, 325, 400, 75);
       
        ctx.fillStyle = "white";
        ctx.font="12px Georgia";
        textWriter(this.text,75,350);
        button.push(new Button(this.action, 300, 350, this.buttonText)); 
      


    }
}

function taUppSak(sak){
    gameObj[0].bag.push(sak);
   // console.log("bag"+figur[0].bag);


}
downMeny=new DownMeny(); 


