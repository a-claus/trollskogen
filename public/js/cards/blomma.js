//---------------------------------------------
//
// Äggblomma
//
//---------------------------------------------
/*

 Wanden ska läggas i säcken.
 Wanden kommer att vrida rutan man är på. Det ska kosta en magienergi.
*/


sakImg.push(new Image());
sakImg[sakImg.length-1].src="./img/egblomma.png";
console.log("blomma");
//bagMagiskStig("blomma");

function plockaBlomma (){
	bagger.push(new Sak());
	var post = bagger[bagger.length-1];
	post.namn = "Ägglomma";
	post.img = sakImg[sakImg.length-1];
	post.dragFunc = function(){ 
		if (wood.mapNR == 4) 
		kartObj.push(entreN);
    	console.log("Yiha");;};
	post.do = function() {};
    post.undo = function() {};



}



thing.push(
 {
    sak: "Blomma",
    img: sakImg[sakImg.length-1],
    vad: "skatt",
    plus: "func",
    func: function() {//bagMagi("blomma");
    				if(wood.mapNR == 4) kartObj.push(entreN);
    				 console.log("Yiha");}, 
    bagFuncSetter: function(){ console.log("Yiha" + this.sak); bagger.func = this.func;}

    }
  );  
console.log(thing)
bagger.sput(thing.length-1);
//gameObj[0].bagFunc()


