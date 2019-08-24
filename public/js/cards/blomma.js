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
sakImg[sakImg.length-1].src="./img/egblomma.png";
console.log("laddas Wand");
bagMagiskStig("blomma");



thing.push(
 {
    sak: "Blomma",
    img: sakImg[sakImg.length-1],
    vad: "skatt",
    plus: "func",
    func: function() {bagMagiskStig("blomma"); console.log("Yiha");}, 
    bagFuncSetter: function(){bagger.func = this.func;}

    }
  );  
console.log(thing)
bagger.sput(thing.length-1);
//gameObj[0].bagFunc()

ajaxQueue--;