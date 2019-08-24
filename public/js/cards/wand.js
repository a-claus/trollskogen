//---------------------------------------------
//
// WAND
//
//---------------------------------------------
/*
 Man får staven av Alven.
 Wanden ska läggas i säcken.
 
 Wanden kommer att vrida rutan man är på. Det ska kosta en magienergi.
*/


sakImg.push(new Image());
sakImg[sakImg.length-1].src = "./img/wand.png";
console.log("laddas Wand");



thing.push(
 {
    sak: "Wand",
    img: sakImg[sakImg.length-1],
    vad: "sak",
    action: "magi", 
    plus: "func"
   
    }
  );  

bagger.sput(thing.length-1, "drag");

gameObj[0].bagFunc = function(){
    console.log("mp" + gameObj[0].magipower);
    	if (gameObj[0].magipower>1){
    		
    	gameObj[0].magipower--;
    	var slump = Math.floor(Math.random()*2);
    	for (var i=0; i<4; i++) {
    			if (wood[NSVO[i]]>=99) wood[NSVO[i]] -= 100;
    			if (wood[NSVO[i]] < 0) wood[NSVO[i]] = 1; 
    		}

    		var temp = wood[NSVO[0]];
    		if (slump==0){
    		wood[NSVO[0]]=wood[NSVO[2]]; // N=V
    		wood[NSVO[2]]=wood[NSVO[1]]; // V=S
    		wood[NSVO[1]]=wood[NSVO[3]]; // S=0
    		wood[NSVO[3]]=temp; // O=N
    		console.log(wood);}
    		else{
    		wood[NSVO[0]]=wood[NSVO[3]];
    		wood[NSVO[3]]=wood[NSVO[1]];
    		wood[NSVO[1]]=wood[NSVO[2]];
    		wood[NSVO[2]]=temp;
    	
    }
    

   		   map[wood.mapNR].norr = wood.norr;
			map[wood.mapNR].vast = wood.vast;
			map[wood.mapNR].ost = wood.ost;
			map[wood.mapNR].soder = wood.soder;
		}

	};

//ajaxQueue--;
console.log("Wand");
gameStatus.push(putEquipmentToBag, move);

