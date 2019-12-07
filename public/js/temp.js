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
        var objR = {};
        if (obj.z == undefined) obj.z = 1;
        objR[obj.index] = obj.z;  //obj.key
        return objR;
    });
    console.log("test");
    let i = 0;    
    var indexOrdning = []; let L = listZ.length; let prev;
    while(i < L){
        prev = listZ[i].z; 
        while (listZ[++i] < prev) indexOrdning.push(i);
    }
console.log(indexOrdning);

    // Loop

        // Kolla om obj flyttar om det kan.
        // Kolla om obj ska hoppa falla och funkar
        // HitActions // nyrutakontroll
        // Rita obj
        
        // Effekter

        //info

        //magicstig

    




}
