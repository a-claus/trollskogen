
var moveV = false; var moveO = false; moveS = false; var moveN = false; var magStigNamn = "none";
function updateGameArea(){
    //console.log("UGA");
    var walk; 
 
 // Loopa floors    
for (let floor = 1; floor <= gameObj[0].floor; floor++){

/*-------Fasta Obj-----------
 Fasta kartObj som inte rör sig. //obstacle
-------------------*/

    for (let i = 0; i < kartObj.length; i++){
        if (kartObj[i].miljo == true && kartObj[i].floor == floor){
            kartObj[i].draw();
/*
        ctx = myGameArea.context;
    //ctx.drawImage(ctx, 0, 0);
    var imgData = ctx.getImageData(0, 0, 400, 400);
    ctx.putImageData(imgData, 0, 0);
    ctx.drawImage(thing, EF_x, EF_y);    */
           }
     }

/*-------Move Obj-----------
Monster och dylikt
-------------------*/
    for (i = 0; i < gameObj.length; i++){
        if (gameObj[i].figur == true && gameObj[i].floor == floor){

            if (gameObj[i].placeMe) { getPosition(i); delete(gameObj[i].placeMe);}
            
            gameObj[i].move();
            walk = 0;
            if (gameObj[i].speedY != 0 || gameObj[i].speedX !=0) walk = checkMoveInOrder(i);
            gameObj[i].x = gameObj[i].x + walk * gameObj[i].speedX;
            gameObj[i].y = gameObj[i].y + walk * gameObj[i].speedY;
            gameObj[i].draw();
            if (gameObj[i].vad == "spelare") {nyRutaKontroll(i);}


        }

        if (gameObj[i].effekt == true) {
            gameObj[i].move();
            gameObj[i].draw();}
    }

/*-------Things-----------
-------------------*/
    for (i=0; i<kartObj.length; i++){
          if (kartObj[i].info == true){
            kartObj[i].draw();
        }
    }
}
//console.log("ms" + magStig);
if (magStigNamn != "none"){
    if (50 < gameObj[0].x && gameObj[0].x + gameObj[0].width/2 < 350 && 50 < gameObj[0].y && gameObj[0].y + gameObj[0].hight/2  < 350 ){
        console.log("tabort MS");
          var index= gameObj.findIndex(function(indexa) { return indexa["namn"] === magStigNamn; });
        kartObj.splice(index, 1);
        magStigNamn = "none";
    }
}
}




//var counter=0; ?


function checkMoveInOrder(index){
    var walker = {go:0, area: "nn"}; 
    var hit;

            walker = findwall(pointOfpic(index));
            if (gameObj[i].specialMove) walker = gameObj[i].specialMove(walker); //??? Alven? Move som inte ska påverkas av väggar

            if (hitObjects > 0){
                hit = objectHit(index);
                console.log("hit" + hit);


                    if (hit != null){
                        walker.go=0;
                        console.log("hit");
                        if (i == 0 || hit == 0){
                            hittad = i + hit;
                            var tempGo = gameObj[i+hit].hitAction();
                            if (tempGo > 0) walker.go += tempGo;
                        }
                    }
            }
        return walker.go;


/*              
            - om wall outputtar area 
                skog, 
                road,
            - om Objecthit -- inte gå men sen hitAction
            - om hopp -- wall blandat
            - om hopp -- objectHit
        */

}



function objectHit(i){
    
    var floor = gameObj[i].floor;
    //console.log(i + "objHit" + gameObj[0].jump.hojd);
    for (var j=0; j < gameObj.length; j++){
       // console.log (floor + " " + j + " "+ gameObj[j].floor);
	   if (j != i && gameObj[j].floor == floor){
            //console.log("ji" + gameObj[i].x +  "<" + gameObj[j].x + gameObj[j].width);
            //console.log(gameObj[i].x+gameObj[i].width + ">" + gameObj[j].x);
            if (gameObj[i].x < gameObj[j].x + gameObj[j].width && gameObj[i].x+gameObj[i].width > gameObj[j].x){
               // console.log("hit X");
                if (gameObj[i].y < gameObj[j].y + gameObj[j].hight && gameObj[i].y + gameObj[i].hight > gameObj[j].y){
                   // console.log("hit Y");
                    return j;
                }
            }
            return null;
        }
    }
}


	//if (id==0) {special="";} 
var minne;

function findwall(p){
   var ctx = myGameArea.context;

var c; var cString; var walker = {}; var minne;
//var position = [{x:p.v, y: p.n}, {x: p.o, y: p.n}, {x: p.v, y: p.s},{x: p.o, y: p.s}]
for (var i = 0; i<2; i++){ 
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
            //if (p==0) { 
           // special="tunnel"; 
            walker.go = 1;
            walker.area = "road";
            //} //xyz
            
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
if (index>0) {console.log("popIndex" + index);}
if (index>0) {console.log("popIndex" + gameObj[index].vaderstrack);}
var v = gameObj[index].x; 
var n = gameObj[index].y; 
var s = gameObj[index].y + gameObj[index].hight;
var o = gameObj[index].x + gameObj[index].width;
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
return p;

}

function nyRutaKontroll(index){
    var nr = false; 
    
    switch (gameObj[index].vaderstrack){
        case "vaster" || "vast": 
           if (gameObj[index].x < 1){
                nr = true;}
        break;
        case "oster":
            if (gameObj[index].x > 357){
             nr = true;}
             break;
        case "norr":
        if (gameObj[index].y < 1){
            nr = true;}
            break;
        
        case "soder": 
            if (gameObj[index].y > 357){
           nr = true;}
           break;
        }
//console.log("nr:"  + nr);
        if (nr == true) {gameStatus.push(nyruta); movepause = true;}
}

function nyruta(){
 if (gameObj[0].vaderstrack == "vast" || gameObj[0].vaderstrack == "vaster"){
                gameObj[0].newRuta=1;
                gameObj[0].x=357;  
                mapChange("vast");}
    
            if (gameObj[0].vaderstrack == "oster"){         
                 gameObj[0].newRuta=1;
                gameObj[0].x=1;  
                mapChange("ost");}
    
        if (gameObj[0].vaderstrack == "norr"){           
            gameObj[0].newRuta=1;
            gameObj[0].y=357;  
            mapChange("norr");}
        
        

        if (gameObj[0].vaderstrack == "soder"){
            gameObj[0].newRuta=1;
            gameObj[0].y=1;  
            mapChange("soder");}

    gameStatus.push(move);
        
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