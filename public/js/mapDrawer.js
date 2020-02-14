
var moveV = false; var moveO = false; moveS = false; var moveN = false; 
var magStigNamn = "none";
//let golv; let tak;



let zeta = true; ritOrder = [];

function updateGameArea(){
   
    var walk; let z; 

    // kartobj, fotografering
    if (paparazzi == true){
        studio();
        paparazzi = false;
    }    
    drawFoto(1);
    
    /*_______________________________ 
    Sortera tak gameobj, för att räkna ut vilkoen ordning gemeObj ska ritas.
    _________________________________*/
    if (zeta == true){
        console.log(gameObj);
        ritOrder = gameObj.map(obj => { 

        //var objR = {};
            var objR = [];
            //objR[obj.index] = obj.z;  //obj.key
            console.log(obj.z[1]);
            objR.push(obj.z[1]);
            return objR;
        });
        
        ritOrder = listArrayOrder(ritOrder);
        console.log(ritOrder);
        zeta = false;
    }


    // Loop
let iii;
    for (iii = 0; iii < gameObj.length; iii++){
        golv = []; tak = [];
       
      
        let i = ritOrder[iii];
 
        if (gameObj[i] == undefined) console.log(" i undefined iii " + iii);

        if (gameObj[i].move() == true){
            walk = checkMoveInOrder(i);
            gameObj[i].x = gameObj[i].x + walk * gameObj[i].speedX;
            gameObj[i].y = gameObj[i].y + walk * gameObj[i].speedY;
            gameObj[i].speedX = 0; gameObj[i].speedY = 0;
        }

        // Kolla om obj ska hoppa falla och funkar
        if (gameObj[i].fall){
            checkFall(i);
            if (iii > 0){
                if (gameObj[i].z[1] < gameObj[ritOrder[iii-1]].z[1]) {
                    console.log("papp -");
                    zeta = true;
                }
            }
            if (iii < ritOrder.length-1){
                if (gameObj[i].z[1] > gameObj[ritOrder[iii+1]].z[1]) {
                    console.log("papp +");
                    zeta = true;
                }
            }
        }
 
        // Rita obj
        gameObj[i].draw();

        let rita = ["edgeSoder"];//"ObstacleKub", "Prinsen" "Blåbär"

        if (rita.findIndex(index => index == gameObj[i].namn) != -1) {
            if (gameObj[i].hitAreaX != undefined) {
                drawTrRuta(gameObj[i].hitAreaX, gameObj[i].hitAreaY, gameObj[i].haWidth, gameObj[i].haHight, gameObj[i].z[1]);
            } else{
                drawTrRuta(gameObj[i].x, gameObj[i].y, gameObj[i].width, gameObj[i].hight);      }
        }
        
        // Effekter ska vara n del av info
        if (gameObj[i].effekt == true) {
            gameObj[i].move();
            gameObj[i].draw();
        }

        //info
        for (i=0; i<kartObj.length; i++){
            if (kartObj[i].info == true){
                kartObj[i].draw();
            }
        }

        //magicstig
    }
  
}


//var counter=0; ?


function checkMoveInOrder(index){
    var walker = {go:0, area: "nn"}; 
    var hit;

            walker = findwall(pointOfpic(index));
           //let array = [];
           //array.push({x: gameObj[index].x + gameObj[index].width/2, y: gameObj[index].y + gameObj[index].hight/2});
            //walker = findwall(array);
            if (gameObj[index].specialMove) walker = gameObj[index].specialMove(walker); //??? Alven? Move som inte ska påverkas av väggar
        //    if (gameObj[index].hojd >= 5) walker = {go:1, area: "flyger"};
            //if (hitObjects > 0){
                hit = objectHit(index);
            //    console.log("hit" + hit);


                    if (hit != null){
                        walker.go = 0;
                    //    console.log("hit");
                        if (index == 0 || hit == 0){
                            hittad = index + hit;
                            var tempGo = gameObj[index + hit].hitAction(); //verkar inte vara ngt problem att skicka med nuffra i parantesen
                            if (tempGo > 0) walker.go += tempGo;
                        }
                    }
            //}
        return walker.go;

}

function obstacleZ(index, hittad){
    //hit over under
    let hogst = gameObj[index].z[0];
   // if (gameObj[index].fall.tyngdpunkt > hogst) hogst = gameObj[index].fall.tyngdpunkt; //XYZ
    let zGolvA = hogst;
    let zTakA = gameObj[index].z[1];
    let zGolvB = gameObj[hittad].z[0];
    let zTakB = gameObj[hittad].z[1];
    //console.log("obsZ");
    //console.log(zGolvA + "-" +zTakA);
    //console.log(zGolvB + "-" +zTakB);

    if (zGolvA == undefined || zGolvB == undefined) {
        //console.log("saknar Z" + index + " " + hittad); 
        return "saknas";}
    
    //if (zTakA <= zGolvB) {return "over";} 
    if (zGolvA >= zTakB ) {
      //  console.log("hittad" + index + "-" +hittad); 
      return "under"; } 
    
        return "hit";
    
   // return "";
}

function checkFall(index){
    let c; let diff; let g;
// kolla efter golv

golv =[];

 

     golv = objectHit(index, "under"); 
    
   // if (g == "under") golv.push(gameObj[i].z[1]);

    


    /*-----------------
        Finns det något under spelare. Vad är närmast under i så fall.
    -------------------*/
    if (golv.length > 0){
        golv.sort(function(a, b){return b - a}); //10 8 6
        gameObj[index].golv = golv[0];
    }
    golv[0] = gameObj[index].golv;

    /*-----------------
        Lägger in en botten om det inte skulle finnas en botten, som det borde.
    -------------------*/
    if (golv[0] == undefined ) {
        golv[0] = gameObj[index].z[0]; //test
       golv[0] = 1; 
      console.log("fel?:" + index);
    }
   
     /*-----------------
        Kontrollera hur långt under boten är och om figur/sak ska falla.
    -------------------*/
    diff = gameObj[index].z[0] - golv[0];
   
    if (diff > 0) {
        gameObj[index].fall.tyngdpunkt = gameObj[index].z[0];
        gameObj[index].fall.on = true;
    }

   /*-----------------
        Om gameObj som ska falla då ska det räknas ut hur mycket. 
    -------------------*/
    if (gameObj[index].fall.on == true){
        gravity(index, golv[0]);
        console.log(gameObj[index].z);
        
    }
 
}

function gravity(index, golva){
// kolla fall

   /*-----------------
        Gravitations-ökning för fall
    -------------------*/  
gameObj[index].fall.acc -= 0.05;

/*-----------------
        Har spelare landat, så kommer uppåt kraft.
    -------------------*/ 
if (gameObj[index].fall.tyngdpunkt < golva){
    if (gameObj[index].fall.acc <= 0) {
        gameObj[index].fall.acc = gameObj[index].fall.acc / 2;
        gameObj[index].fall.acc += 0.1;
    }
}

/*-----------------
        Tyngdpunkten beräkning
    -------------------*/ 
gameObj[index].fall.tyngdpunkt +=  gameObj[index].fall.acc;


/*-----------------
       Om tyngdpunkt under golv,  så står spelare på golv.
    -------------------*/            
        if  (gameObj[index].fall.tyngdpunkt < golva ) gameObj[index].z[0] = golva;

/*-----------------
       Om tyngdpunkt är över golv,  så är z samma som tyngdpunkten
    -------------------*/
        if  (gameObj[index].fall.tyngdpunkt >= golva ){
            gameObj[index].z[0] = gameObj[index].fall.tyngdpunkt;
            gameObj[index].z[1] = gameObj[index].fall.tyngdpunkt + gameObj[index].hojd;
             //  gameObj[index].fall.on = false;
        }
        
        /*-----------------
      När fall är avslutat acc och tyngdpunkt är = 0
    -------------------*/
            if (gameObj[index].fall.acc >= -0.1 && gameObj[index].fall.acc <= .1){
                console.log("Golva" + golva);
                if (gameObj[index].fall.tyngdpunkt >= golva - .1 && gameObj[index].fall.tyngdpunkt <= golva +.1){
                    gameObj[index].fall.acc = 0;
                    gameObj[index].fall.on = false;
                    gameObj[index].z[0] = golva;
                    gameObj[index].z[1] = golva +.3;
                    gameObj[index].fall.tyngdpunkt = golva;  
                }
            }

    
    if (golv[0] == undefined) {
        //golv[0] = gameObj[index].floor; 
        golv[0] =1; 
        console.log("Gravity fel?:" + index);
        console.log(golv[1])}
    
       /*-----------------
      Ändra storlek på onjekt som ska ritas
    -------------------*/

    gameObj[index].fall.drawer = 1 + gameObj[index].fall.tyngdpunkt - golv[0];



      

}
    



function objectHit(i, retur = "hit"){
    
    //var floor = gameObj[i].floor;
    //var iX; var iY; var iZ;
    //var jX; var jY; var jW; var jH; 
    let bullsEye; let array = [];
   

  

    let ixy = getObjCenter(i, true);
    let jxy; 
    
    for (var j=0; j < gameObj.length; j++){
	   if (j != i ){ 
           jxy = getObjArea(j, false);
           
           
            if (ixy.x < jxy.x + jxy.w && ixy.x > jxy.x){
                
                if (ixy.y < jxy.y + jxy.h && ixy.y > jxy.y){
                 

                    bullsEye = obstacleZ(i, j);

                    if (retur == "hit"){
                        if (bullsEye == "hit") return j;
                    }
                    if (retur == "under" ){
                        if (bullsEye == "under") {
                          
                            array.push(gameObj[j].z[1]);
                        }
                    }
                    if (retur == "over"){
                        if (bullsEye == "over") array.push(tak.push(gameObj[j].z[0]));
                    }
                }
            }
         
        }
    }

    
    if (retur == "hit") return null;
    if (retur == "under" || retur == "over") return array;
}


function getObjCenter(i, go = true){
    let obj={}; let add = {x: 0, y: 0};

    if (go == true){ 
        add.x = gameObj[i].speedX;
        add.y = gameObj[i].speedY;
    }
    if (gameObj[i].hitAreaX){
            obj.x = gameObj[i].hitAreaX + gameObj[i].haWidth/2 + add.x
            obj.y = gameObj[i].hitAreaY + gameObj[i].haHight/2 + add.y;
        }
    else {
            obj.x = gameObj[i].x + gameObj[i].width / 2 + add.x;
            obj.y = gameObj[i].y + gameObj[i].hight / 2 + add.y;
        
        }
        return obj;    
}


function getObjArea(i, go = false){
    obj={}; add = {x: 0, y: 0};

    if (go == true){ 
        add.x = gameObj[i].speedX;
        add.y = gameObj[i].speedY;
    }
    if (gameObj[i].hitAreaX > -1){
            obj.x = gameObj[i].hitAreaX + add.x
            obj.y = gameObj[i].hitAreaY + add.y;
            obj.w = gameObj[i].haWidth;
            obj.h = gameObj[i].haHight;
        }
    else{
            obj.x = gameObj[i].x + 6 + add.x;
            obj.y = gameObj[i].y + 6 + add.y;
            obj.w = gameObj[i].width - 12;
            obj.h = gameObj[i].hight - 12;
        }
    
return obj;
}


	//if (id==0) {special="";} 
var minne;

function getRGB(x, y){
   let c = ctx.getImageData(x, y, 1, 1).data;
    return c[0]+" "+c[1]+" "+c[2];
}

function findwall(p){
   var ctx = myGameArea.context;

var c; var cString; var walker = {}; var minne;
//var position = [{x:p.v, y: p.n}, {x: p.o, y: p.n}, {x: p.v, y: p.s},{x: p.o, y: p.s}]
for (var i = 0; i<p.length; i++){ 
   cString = getRGB(p[i].x, p[i].y);
	
    minne = cString;


     switch (cString){
        
        case "255 255 255": 
            walker.go = 1;
            walker.area = "road";
            break;

            case "0 128 0": 
            walker.go = 0;
            walker.area = "wood";
            break; 
            case "0 152 43": 
            walker.go = 0;
            walker.area = "wood";
            break; 
            case "203 195 151": 
            walker.go = 0;
            walker.area = "betong";
            break;       

    
        
        	default:
                walker.go=1;
                walker.area ="road";
            
    }

}
return walker;
}

function getPosition(index){
    /*-------------------------------------- 
    ska förhindra att kort lägger sig på ngt annat obj på kartan 
    */
     let c; let cString;
    const xplus = 100 + gameObj[index].width/2;
    const yplus = 100 + gameObj[index].hight/2;
    console.log(index);
    let x = gameObj[index].x + xplus;
    let y = gameObj[index].y + yplus; 
     console.log(x + "- " +  y);
    for (let i=0; i<1; i++){
       
        c = ctx.getImageData(x, y, 1, 1).data;

        cString = c[0]+" "+c[1]+" "+c[2]; 
        if (cString!= "255 255 255") {
            x = Math.floor(Math.random() * 200) + xplus;
            y = Math.floor(Math.random() * 200) + yplus;
            i--;}

    }
    gameObj[index].x = x - gameObj[index].width/2;
    gameObj[index].y = y - gameObj[index].hight/2;


}


function pointOfpic(index){
    //l¨Leverera två punkter för att kolla at man inte går i vägg eller något

      let array = [];
      array.push({x: gameObj[index].x + gameObj[index].width/2, y: gameObj[index].y + gameObj[index].hight/2});
        

var v = gameObj[index].x+5;
var n = gameObj[index].y +5; 
var s = gameObj[index].y + gameObj[index].hight-5;
var o = gameObj[index].x + gameObj[index].width-5;
var p=[];
//console.log ("fl" + kartObj[0].floor + " - " + v + "v-0" + o + " " + n + "n-s" +s);
    if (gameObj[index].vaderstrack == "soder") {
        s = s + gameObj[index].speedY
        p.push({x:v+5 , y:s});
        p.push({x:o-5, y:s})
        array[0].y+=2;
    }
    if (gameObj[index].vaderstrack == "norr") {
        n = n + gameObj[index].speedY;
        p.push({x:v+5 , y:n});
        p.push({x:o-5, y:n})
        array[0].y-=2;
    }
    if (gameObj[index].vaderstrack == "vaster") {
        v = v + gameObj[index].speedX;
         p.push({x:v , y:n+5});
        p.push({x:v, y:s-5})
        array[0].x-=2;
    }
    if (gameObj[index].vaderstrack == "oster") {
        o = o + gameObj[index].speedX;
        p.push({x:o , y:n+5});
        p.push({x:o, y:s-5});
        array[0].x+=2;
    }
    if (gameObj[index].vaderstrack == "nv") {
        v = v + gameObj[index].speedX;
        n = n + gameObj[index].speedY;
        p.push({x:v , y:n});
    }
    if (gameObj[index].vaderstrack == "no") {
        o = o + gameObj[index].speedX;
        n = n + gameObj[index].speedY;
        p.push({x:o , y:n});
    }
    if (gameObj[index].vaderstrack == "sv") {
        v = v + gameObj[index].speedX;
        s = s + gameObj[index].speedY;
        p.push({x:v , y:s});
    }
    if (gameObj[index].vaderstrack == "so") {
        o = o + gameObj[index].speedX;
        s = s + gameObj[index].speedY;
        p.push({x:o , y:s});
    }
    return array;
//return p;

}

function nyRutaKontroll(index){
    var nr = false; 
    
    switch (gameObj[index].vaderstrack){
        case "vaster" || "vast": 
           if (gameObj[index].x <= 1){
                nr = true;}
        break;
        case "oster":
            if (gameObj[index].x > 357){
             nr = true;}
             break;
        case "norr":
        if (gameObj[index].y <= 1){
            nr = true;}
            break;
        
        case "soder": 
            if (gameObj[index].y > 357){
           nr = true;}
           break;
        }
//console.log("nr:"  + nr);
        if (nr == true) {gameStatus.push(nyruta); movepause = true; console.log("F" +  gameObj[0].floor)}
}

function nyruta(){
 if (gameObj[0].vaderstrack == "vast" || gameObj[0].vaderstrack == "vaster"){
                gameObj[0].newRuta=1;
                gameObj[0].x=357;  
                paparazzi=true;
                mapChange("vast");}
    
            if (gameObj[0].vaderstrack == "oster"){         
                 gameObj[0].newRuta=1;
                gameObj[0].x=1; 
                paparazzi=true; 
                mapChange("ost");}
    
        if (gameObj[0].vaderstrack == "norr"){           
            gameObj[0].newRuta=1;
            gameObj[0].y=357; 
            paparazzi=true; 
            mapChange("norr");}

        if (gameObj[0].vaderstrack == "soder"){
            gameObj[0].newRuta=1;
            gameObj[0].y=1;  
            paparazzi=true;
            mapChange("soder");}

           if (gameObj[0].vaderstrack == "jump"){
            gameObj[0].newRuta=1;
            //gameObj[0].y=1;  
            paparazzi=true;
            mapChange("jump");}
            zeta = true;
    gameStatus.push(move);
    //console.log(gameStatus);
        
return false;
}

function magicStig(){
    if (gameObj[0].newRuta==1){
        if (gameObj[0].x<=60){return "vast";}
        if (gameObj[0].y<=60){return "norr";}
        if (gameObj[0].x>=320){return "ost";}
        if (gameObj[0].y>=320){return "soder";} //400 -40 -40
    gameObj[0].newRuta=0;
    }
}