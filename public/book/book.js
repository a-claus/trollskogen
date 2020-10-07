var figurImg = [];
figurImg.push(new Image());
figurImg[0].src="./img/prins.png";

figurer = [];
figurer.push({
	id: "Prinsen",
	url: "./js/player/prins.js",
	status: "alive"
});
figurer.push({
	id: "Narren",
	url: "./js/player/narr.js",
	status: "alive"
});

getFile(figurer[0].url);

// Börja att ladda upp

	// Bilder
	// Text??
	

// Rita upp yta, två knappar Nästa, starta spel.

// Välja figur

// Starta spel

//---------------------------------------------
//
// Svamp
//
//---------------------------------------------
/*
ger slumpvis bonuc. IQ, styrka, extra hjärta och gift

*/


 bookImages.push(new Image());
      //  bookImages[bookImages.length - 1].addEventListener("load", notWaiting.bind(namn))
        bookImages[bookImages.length - 1].scr = "./img/hart.png";
laddabilder("ett", "./img/book/1.png", "book")
laddabilder("tva", "./img/book/2.png", "book")
laddabilder("tre", "./img/book/3.png", "book")
laddabilder("fyra", "./img/book/4.png", "book")
laddabilder("fem", "./img/book/5.png", "book")
laddabilder("sex", "./img/book/6.png", "book")
laddabilder("sju", "./img/book/7.png", "book")
laddabilder("atta", "./img/book/8.png", "book")
laddabilder("nio", "./img/book/9.png", "book")
laddabilder("prins", "./img/book/prins.png", "book")
laddabilder("kammarjungfru", "./img/book/kammarjungfru.png", "book")
laddabilder("narr", "./img/book/narr.png", "book")
laddabilder("riddare", "./img/book/riddare.png", "book")


class Book{
	constructor(){
		this.page=0;
		this.end = 9;
		this.figurer = 4;

	}


 	read(){
	this.page++;
	console.log("hej",this.page);
	    ctx = myGameArea.context;


	ctx.drawImage(bookImages[this.page],0,0);	
	if (this.page > end) 
		{return false;}
	else
	 {return true;} 
	}
}
let book = new Book();
