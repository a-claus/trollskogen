//---------------------------------------------
//
// Äggblomma
//
//---------------------------------------------
/*

*/



sakImg.push(new Image());
sakImg[sakImg.length-1].src="./img/egblomma.png";
console.log("blomma");


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



