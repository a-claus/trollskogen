
var moveV = false; var moveO = false; moveS = false; var moveN = false; 
var magStigNamn = "none";
let golv; let tak;


let zChange = true; listZ = [];
function updateGamearea(){
    var walk; let z; 

    // kartobj, fotografering
    if (paparazzi == true){
        studio();
        paparazzi = false;
    }    
    drawFoto(floor);
    // Gameobj placeme

    // Sortera höjd gameobj
    
    let listZ = gameObj.map(obj => { 
        //var objR = {};
        var objR = [];
        if (obj.z == undefined) obj.z = 1;
        //objR[obj.index] = obj.z;  //obj.key
        objR.push(obj.z);
        return objR;
    });
     
    //var listZ= [7,5.5,8,1];

    listZ = listArrayOrder(listZ);
     
    // Loop
    for (i = 0; i < gameObj.length; i++){
        golv = []; tak = [];

        // Kolla om obj flyttar om det kan.
        // Kolla om obj ska hoppa falla och funkar
        // HitActions // nyrutakontroll
        // Rita obj
        
        // Effekter

        //info

        //magicstig
    }
}




//var counter=0; ?


function checkMoveInOrder(index){
    var walker = {go:0, area: "nn"}; 
    var hit;

            walker = findwall(pointOfpic(index));
            if (gameObj[i].specialMove) walker = gameObj[i].specialMove(walker); //??? Alven? Move som inte ska påverkas av väggar
            if (gameObj[i].hojd >= 5) walker = {go:1, area: "flyger"};
            //if (hitObjects > 0){
                hit = objectHit(index);
            //    console.log("hit" + hit);


                    if (hit != null){

                        walker.go=0;
                        console.log("hit");
                        if (i == 0 || hit == 0){
                            hittad = i + hit;
                            var tempGo = gameObj[i+hit].hitAction(); //verkar inte vara ngt problem att skicka med nuffra i parantesen
                            if (tempGo > 0) walker.go += tempGo;
                        }
                    }
            //}
        return walker.go;




}



function obstacleZ(index, hittad){
    //hit over under
    let zGolvA = gameObj[index].z;
    let zTakA = gameObj[index].z + gameObj[index].hojd;
    let zGolvB = gameObj[hittad].z;
    let zTakB = gameObj[hittad].z + gameObj[hittad].hojd;
    console.log("obsZ");
    if (zGolvA == undefined || zGolvB == undefined) {console.log("saknar Z");return "saknas";}
    
    if (zTakA <= zGolvB) {return "over";}
    if (zGolvA >= zTakB ) {return "under";}
    //if (zGolvA < zTakB && zTakA > zGolvB) 
        return "hit";
    
   // return "";
}

function checkFall(index){
    let c; let diff;
    
    golv.sort(function(a, b){return b - a}); //10 8 6
    
    if (golv[0] == undefined) {
        golv[0] = gameObj[index].z; //test
        golv[0] = 1; 
        console.log("fel?:" + index);
    }
        
    diff = gameObj[index].z - golv[0];
    console.log("---" + diff );
    
     
    if (diff > 0 ) {
        gameObj[index].fall.ZunderZero = gameObj[index].z;
        gameObj[index].fall.on = true;
    }

    console.log(gameObj[index].fall.on + "---" + gameObj[index].z);
    if (gameObj[index].fall.on == true){
      
        gravity(index, diff);}

        
   
}

function gravity(index, diff){
// kolla fall

    
gameObj[index].fall.acc -= 0.05;

    

    if (diff <= 0)
        { 
            if (gameObj[index].fall.acc <= 0) {
                gameObj[index].fall.acc = gameObj[index].fall.acc / 2;
                gameObj[index].fall.acc += 0.1;
            }
        }

        gameObj[index].fall.ZunderZero +=  gameObj[index].fall.acc;
        

        if  (gameObj[index].fall.ZunderZero < golv[0] ) gameObj[index].z = golv[0];
        if  (gameObj[index].fall.ZunderZero >= golv[0] ){
            gameObj[index].z = gameObj[index].fall.ZunderZero;
             //  gameObj[index].fall.on = false;
        }
        
            if (gameObj[index].fall.acc >= -0.1 && gameObj[index].fall.acc <= .1){
                if (gameObj[index].fall.ZunderZero >= .9 && gameObj[index].fall.ZunderZero <= 1.1){
                gameObj[index].fall.acc = 0;
                gameObj[index].fall.on = false;
                gameObj[index].z = golv[0];
                gameObj[index].fall.ZunderZero = golv[0];  
            }}

    
    if (golv[0] == undefined) {
        //golv[0] = gameObj[index].floor; 
        golv[0] =1; 
        console.log("fel?:" + index);}
    
    gameObj[index].fall.drawer = 1 + gameObj[index].fall.ZunderZero - golv[0];
    console.log("z" + gameObj[index].z);
    console.log(gameObj[index].fall.acc + " / " +gameObj[index].fall.ZunderZero); 
    console.log("b" + gameObj[index].fall.drawer + " / " + gameObj[index].fall.on); 
}
    



function objectHit(i){
    
    var floor = gameObj[i].floor;
    var iX; var iY; var iZ;
    var jX; var jY; var jW; var jH; 
    let bullsEye; let jjj = -1;
    let NS; let VO;

    console.log("Oh");
    //let jHojd = .5;
    //let zetA = false; let zetB = false; 
    
    if (gameObj[i].hitAreaX){
        iX = gameObj[i].hitAreaX + gameObj[i].haWidth/2 + gameObj[i].speedX
        iY = gameObj[i].hitAreaY + gameObj[i].haHight/2 + gameObj[i].speedY;
    }
    else{
        iX = gameObj[i].x + gameObj[i].width / 2 + gameObj[i].speedX;
        iY = gameObj[i].y + gameObj[i].hight / 2 + gameObj[i].speedY;
        
    }
    
    for (var j=0; j < gameObj.length; j++){
	   if (j != i ){ //gameObj[j].floor == floor
            if (gameObj[j].hitAreaX){
                jX = gameObj[j].hitAreaX;
                jY = gameObj[j].hitAreaY;
                jW = gameObj[j].haWidth;
                jH = gameObj[j].haHight;
            }
            else{
                jX = gameObj[j].x + 10;
                jY = gameObj[j].y + 10;
                jW = gameObj[j].width - 10;
                jH = gameObj[j].hight - 10;
            }   
       // console.log(jX + " " + jY);

            if (iX < jX + jW && iX > jX){

                if (iY < jY + jH && iY > jY){
                    bullsEye = obstacleZ(i, j);
                    console.log("Bulls Eye" + bullsEye);
                    if (bullsEye == "saknas") jjj = j;
                    if (bullsEye == "hit") jjj = j;
                    if (bullsEye == "under") golv.push(gameObj[j].z + gameObj[j].hojd);
                    if (bullsEye == "over") tak.push(gameObj[j].z);
                    console.log("_____G____" + golv.length);
                    console.log("_____G___:" + golv[golv.length - 1]);
                    console.log("z" + gameObj[i].z)
                    console.log("J:" + jjj);
                }
            }
         
        }
    }
    if (jjj>-1) return jjj;
    if (jjj == -1) return null;
}


	//if (id==0) {special="";} 
var minne;

function findwall(p){
   var ctx = myGameArea.context;

var c; var cString; var walker = {}; var minne;
//var position = [{x:p.v, y: p.n}, {x: p.o, y: p.n}, {x: p.v, y: p.s},{x: p.o, y: p.s}]
for (var i = 0; i<p.length; i++){ 
    //console.log("p-findwall:" + p[i].x + "-" +p[i].y);
	c = ctx.getImageData(p[i].x, p[i].y, 1, 1).data;
    cString = c[0]+" "+c[1]+" "+c[2]; 
   //if (minne != cString) console.log("color" + cString);
    minne = cString;


     switch (cString){
        
        case "255 255 255": 
            walker.go = 1;
            walker.area = "road";
            break;

         case "215 215 181": //bro
            walker.go = 1;
            walker.area = "road";
            break;  

             case "215 215 185": //bro
            walker.go = 1;
            walker.area = "road";
            break;     
        
        case "187 191 165" || "187 191 168":
             //if (gameObj[0]) {
                walker.go = 3;
                walker.area = "road"; //}
          //  else
              //  {return 0;}

        break;
/*
        case "165 42 42": //brown? //hoppa ner
            if (id==0) {special="tunnel Jump"; 
                       figur[0].status="jump"; }
            return 0;
            break;*/


         case "120 120 120": //under bron
           
            walker.go = 1;
            walker.area = "road";
            break;
          case "128 128 128": //kvadrat
           
            walker.go = 1;
            walker.area = "road";
            break;


        case "0 128 0":
            walker.go=0;
            walker.area = "wood";
        break;
        case "121 121 121": //under bron
            //if (id==0) { special="tunnel"; }
           walker.go = 1;
            walker.area = "road";
            break;
    
        
        	default:
                walker.go=0;
                walker.area ="thing";
            
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
    }
    if (gameObj[index].vaderstrack == "norr") {
        n = n + gameObj[index].speedY;
        p.push({x:v+5 , y:n});
        p.push({x:o-5, y:n})
    }
    if (gameObj[index].vaderstrack == "vaster") {
        v = v + gameObj[index].speedX;
         p.push({x:v , y:n+5});
        p.push({x:v, y:s-5})
    }
    if (gameObj[index].vaderstrack == "oster") {
        o = o + gameObj[index].speedX;
        p.push({x:o , y:n+5});
        p.push({x:o, y:s-5})
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
return p;

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