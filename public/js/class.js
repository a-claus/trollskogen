console.log("class laddas");

var sakImg=[];
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
class Dead {
    constructor(namn, bag, ruta){
        this.namn = namn;
        this.ruta = ruta;
        this.bag = bag; 
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
         //?   if (this.x<2) {this.x=380;  mapChange("vast");}
         //?   if (this.x>386) {this.x=0;  mapChange("ost");} //xyz x ska kunna bli 400. Någonstans har jag gjort ett tak.
          //?  if (this.y<2) {this.y=380;  mapChange("norr");}
          //?  if (this.y>400) {this.y=0;  mapChange("soder"); }    
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
class xMonster extends Figur{
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
        this.mapNR=mapNR;
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
        this.floors = map[mapNR].floors;
        console.log(map[mapNR].soder);
        //gameObj[0].floor=2;  

//--------- new ------------
        this.kartbit=map[mapNR].kartbit;
        this.monster=map[mapNR].monster;
        if (map[mapNR].edge) {
            this.edge = map[mapNR].edge;
            console.log("edge___");}
        else
            { this.edge = "not";}

//        console.log("Saknas download, lägg in true på kartbitar" + map[mapNR].download);
  //xyz      if (map[mapNR].download == true) movepause = true;


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

  


  xdrawGlanta(){
            ctx.beginPath();
            ctx.arc(200, 200, 150, 0, 2*Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            drawRoads(this.mapNum);
        }

xdrawBro(floor){
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
    if (vaderstrack=="jump") return "jump";
    if (vaderstrack=="soder") return "norr";
    if (vaderstrack=="norr") return "soder";
    if (vaderstrack=="ost") return "vast";
    if (vaderstrack=="vast") return "ost";
    if (vaderstrack== "undefinedjump") return "jump";
}

function setFloor(vaderstrack){
    let floor;
  
    vaderstrack = inverseVaderstrack(vaderstrack);
console.log(kartbit[wood.kartbit]);
   if (vaderstrack!= "jump") {
        floor = kartbit[wood.kartbit][vaderstrack];
        if (floor == 0) floor = 1
        gameObj[0].z[0] = floor;
        gameObj[0].z[1] = floor + .3;}
    else{
        gameObj[0].z[0] = 4;
        gameObj[0].z[1] = 4 + .3;}
}

function countMap(kartbit, vaderstrack){
    console.log("A" + kartbit + vaderstrack);
       switch (vaderstrack){
            case "norr":
            if (kartbit != 4) {
                kartbit = kartbit - 9;} 
                else
                {
                    console.log("tillbaka")
                    kartbit = 81;}

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
            case "jump":
               kartbit = tempArray[0];
               console.log("jump kartbit"+kartbit);
            break;
        }
        return kartbit;
}


function drawRuta(){
    for (i = 0; i < fastaKartObj.length; i++){

    }
}



    
console.log ("button laddas");    
//----------------------------------------------------------------------------
class Button {
    constructor(action, x, y, text="Slå", width=100, height=40, pic = "standard", extra = {}){
        //--- HITAREA --- alla buttons
        this.x=x;
        this.y=y;
        this.width=width;
        this.height = height;
        this.area = {x: x, y: y, width: width, height: height};

        //------ alla
        this.knappHit = false; //xyz
        this.action = action; //vilken gameStatus
// ---- STANDARDKNAPP -------------------------
       if (pic == "standard"){ 
        var ctx = myGameArea.context;
        ctx.drawImage(knapp, x, y);
        ctx.fillStyle = "white";
        ctx.textAlign="center";
        for (var i=0; i<6; i++){
            ctx.font=16-i + "px Georgia"; 
            if (ctx.measureText(text).width < width) {break;}
        }
                ctx.fillText(text, x + width/2, y + height/2+6);

        }

        if (pic == "invisible"){ this.makeInvisible(); }
       if (pic == "arrow"){ 
        var ctx = myGameArea.context;
        ctx.drawImage(arrow, x, y, width, height); }
       if (extra.onArea == true){
            this.oa = true;
            //console.log(extra.oa_func);
            //this.oa_func=extra.oa_func;
            
            //this.button.onAreaFunc = extra.func;
        }
        
            
            
    }
    makeInvisible(){
        this.width= 400;
        this.height = 400;
        this.x = 0;
        this.y = 0;
        console.log(this);
    }


    hit() {
       
                if (this.action == move) movepause = false; //xyz
                gameStatus.push(this.action);
                
    }  
    onArea() {
                console.log(book);

               // if (this.action == move) movepause = false; //xyz
                this.oa = false;
                book.onArea = true;
                book.draw();
                return false;
                
    }     

}


function deleteButtons(){
    button.splice(0, button.length);
}



function taUppSak(sak){
    gameObj[0].bag.push(sak);
   // console.log("bag"+figur[0].bag);


}

console.log("klass klar");
