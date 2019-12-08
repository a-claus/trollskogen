//variabler

function updateGamearea(){

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
        if (obj.z == undefined) 
            {obj.z = 1;
            obj.hojd = .1;
            }
        //objR[obj.index] = obj.z;  //obj.key
        objR.push(obj.z + obj.hojd);
        return objR;
    });
     
    //var listZ= [7,5.5,8,1];

    listZ = listArrayOrder(listZ);
     console.log(listZ);

     //HÖJDLIMIT
     let zetaLimit = gameObj[0].z + gameObj[0].hojd + .5;

    // Loop
    for (i = 0; i < gameObj.length; i++){
        var j = listZ.indexOf(i);
        if(gameObj[j].z + gameObj[j].hojd > zetaLimit) break;


        // Kolla om obj flyttar om det kan.
        
        // Kolla om obj ska hoppa falla och funkar
        // HitActions // nyrutakontroll
        // Rita obj
        
        // Effekter

        //info

        //magicstig

    
    }



}
