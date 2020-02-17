//variabler

console.log("tempjs");

function updateGameArea(){
    
    var walk; let z; 
    
    let listZ = gameObj.map(obj => { 
        //var objR = {};
        var objR = [];
        if (obj.z == undefined) obj.z = 1;
        //objR[obj.index] = obj.z;  //obj.key
        objR.push(obj.z);
        return objR;
    });
    
    console.log(listZ);
       
     // Loopa floors    
        for (let floor = 1; floor <= gameObj[0].floor; floor++){
    
    /*-------Fasta Obj-----------
     Fasta kartObj som inte rör sig. //obstacle
    -------------------*/
            if (paparazzi == true){
                studio();
                paparazzi = false;
            }    
    
            drawFoto(floor);
            
           
    
    /*-------Move Obj-----------
    Monster och dylikt
    -------------------*/
            for (i = 0; i < gameObj.length; i++){
                golv = []; tak = [];
                
                
                if (gameObj[i].floor) {z = Math.floor(gameObj[i].floor);} else {Math.floor(gameObj[i].z);} //tillfällig
                if (gameObj[i].figur == true && z == floor){
    
                    if (gameObj[i].placeMe) 
                        { getPosition(i); delete(gameObj[i].placeMe);}
                
                    gameObj[i].move();
                    walk = 0;
                    if (gameObj[i].speedY != 0 || gameObj[i].speedX !=0) walk = checkMoveInOrder(i);
                    gameObj[i].x = gameObj[i].x + walk * gameObj[i].speedX;
                    gameObj[i].y = gameObj[i].y + walk * gameObj[i].speedY;
                    if (gameObj[i].fall) checkFall(i);
                    
                    gameObj[i].draw();
                  //  if (gameObj[i].vad == "spelare") {nyRutaKontroll(i);}
                }
    
                if (gameObj[i].effekt == true) {
                    gameObj[i].move();
                    gameObj[i].draw();
                }
            }
    
    /*-------Things-----------
    -------------------*/
            for (i=0; i<kartObj.length; i++){
                if (kartObj[i].info == true){
                    kartObj[i].draw();
                }
            }
    
    //console.log("ms" + magStig);
            if (magStigNamn != "none"){
                if (50 < gameObj[0].x && gameObj[0].x + gameObj[0].width/2 < 350 && 50 < gameObj[0].y && gameObj[0].y + gameObj[0].hight/2  < 350 ){
                    console.log("tabort MS");
                    var index= gameObj.findIndex(function(indexa) { return indexa["namn"] === magStigNamn; });
                    kartObj.splice(index, 1);
                    magStigNamn = "none";
                    paparazzi=true;
                }
            }
        }
    }
    