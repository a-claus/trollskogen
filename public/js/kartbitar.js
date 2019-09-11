
var card=[];
card.push({id:0, namn:"Skatten", vad:"skatt", url: "./js/cards/egblomma.js"});
card.push({id:1, namn:"blank", vad:"blank"});
card.push({id:2, namn:"Lilltroll", vad:"monster",url: "./js/cards/troll.js"});
card.push({id:3, namn:"Trollmor", vad:"monster",color:"black", styrka:2, liv:1, vinst:0, width:18, height:18, f_text:"Ett troll sitter och tittar på sitt navelludd."});
card.push({id:4, namn:"Trollfar", vad:"monster",color:"black", styrka:3, liv:1, vinst:2, width:21, height:21, f_text:"Trollmor står och lagar tomtesoppa."});
card.push({id:5, namn:"Svamp", url:"./js/cards/svamp.js"});
card.push({id:6, namn:"Blåbär", url:"./js/cards/blabar.js"});
card.push({id:7, namn:"Hugin och Munin", vad:"animal", color:"black", dice:4 , width:6, height:6});
card.push({id:8, namn:"Alven", url:"./js/cards/alven.js"});


var xactions=[];
//var hero=[];
//hero.push({id:0, namn:"Prinsen", url:"./js/player/prins.js", vad:"spelare", color:"red", liv:3, styrka:2, magi:0, iq:1, width:21, height:21});
//hero.push({id:1, namn:"Prinsessan", vad:"spelare", color:"red", liv:2, styrka:1, magi:1, iq:2, width:21, height:21});
//console.log(hero);

//var thing=[];
//thing.push({id:0, namn:"Klubba", vad:"sak",color:"grey", plus:"styrka", width:5, height:5, img:klubba, f_text:"Den här sleven skulle bli en bra klubba!"});
//thing.push({id:1, namn:"Piska", vad:"sak",color:"grey", plus:"styrka", width:5, height:5, img:piska, f_text:"En piska!"});
//thing.push({id:2, namn:"Kudde", vad:"sak",color:"grey", plus:"jump", width:5, height:5, img:kudde, f_text:"Den är mjuk!"});
//thing.push({id:3, namn:"Svärd", vad:"sak",color:"grey", plus:"styrka", width:5, height:5, img:sword, f_text:"Chop, chop!"});





//function newGame(){}
var kartbit=[];

kartbit.push({namn:"Road", norr:1,soder:1,ost:1,vast:1, typ:"glanta",floors:1, actionIndex:-1}); // 5
kartbit.push({namn:"Road",norr:0,soder:1,ost:1,vast:1, typ:"glanta",floors:1, actionIndex:-1});    //  5
kartbit.push({namn:"Road",norr:1,soder:0,ost:1,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:1,soder:1,ost:1,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:1,soder:1,ost:0,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:1,soder:1,ost:0,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:1,soder:0,ost:0,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:1,soder:0,ost:1,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:0,soder:0,ost:1,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:0,soder:1,ost:1,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"Road",norr:0,soder:1,ost:0,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({namn:"FyraBroVO",norr:1,soder:1,ost:2,vast:2, typ:"bro",floors:2,actionIndex:-1});
kartbit.push({namn:"FyraBroNS",norr:2,soder:2,ost:1,vast:1, typ:"bro",floors:2,actionIndex:-1});
kartbit.push({namn:"Svärdet i stenen", norr:1,soder:1,ost:1,vast:1, typ:"glantaSp", floors:1, actionIndex:0});
kartbit.push({namn:"Mimers Brunn", norr:1,soder:1,ost:1,vast:1, typ:"glantaSp", floors:1, actionIndex:0});
kartbit.push({namn:"Ravin1", norr:1, soder:1, ost:1, vast:1, typ:"stup", floors:1, actionIndex:-1});
kartbit.push({namn:"Ravin",norr:2,soder:1,ost:1,vast:2, typ:"stup",floors:2,actionIndex:-1});
kartbit.push({namn:"Start",norr:1,soder:1,ost:1,vast:1, typ:"start", bildBG: "/img/map_start.png", floors:1, actionIndex:-1});
kartbit.push({namn:"Corner0",norr:0,soder:1,ost:1,vast:0, typ:"corner",floors:1,actionIndex:-1});


var map=[]; 
var xmupparna=[];




function lottaCards(){
	var crupier=[]; var j;
	for (j=0;j<81;j++){
		crupier.push(Math.floor(Math.random()*8)+1);
	}
	var lott = Math.floor(Math.random()*36)+45;
	//console.log("skatt" + lott);
	crupier[lott] = 0;
	return crupier;
}
var crupier = lottaCards();


function shuffle(antal=81){
	antalCards=[];
for (var i =0; i<antal; i++) {antalCards.push(i);}
	blanda=[];

while (0 < antalCards.length)  {
	blanda.push(antalCards.splice(Math.floor(Math.random()*antalCards.length),1) );
}

return blanda;
}
//blanda=[];
var blanda = shuffle();

//blandadCards[];

console.log("kb");


function makeMap(){
var y=0;

for (var i = 0; i < 81; i++){

 		map[blanda[i]] = {
 			namn:kartbit[y].namn, 
 			norr:kartbit[y].norr, 
 			soder:kartbit[y].soder, 
 			ost:kartbit[y].ost, 
 			vast:kartbit[y].vast, 
 			typ:kartbit[y].typ, 
 			floors:kartbit[y].floors,
 			//actionIndex:kartbit[y].actionIndex,
 			kartbit: y,
 			card: crupier[i]
 		};
 
 	y++;
 	if(y>=16){y=0;}
}
}
makeMap();

function bytPlats(namn, vad="namn"){

	var indexZZ = map.findIndex(zz => zz[vad]==namn);
	//console.log (map.findIndex(zz => zz["monster"]==8));
	var tmp = map[indexZZ];
	map[indexZZ] = map[4];
	map[4] = tmp;
}
//bytPlats("Svärdet i stenen"); newBagv1
//bytPlats(0,"card"); //skatt // newBagv1
//bytPlats("FyraBroNS");
//bytPlats("Mimers Brunn"); // newBagv1 saknar effekt
//bytPlats(8,"card"); //alven newBagv1
//bytPlats(5,"card"); //svamp newBagv1
//bytPlats(6,"card"); //6 blåbär saknar effekt
bytPlats( 2, "card" ); //Lilltroll saknar effekt


function bytPlatsMedBlank(namn, vad, ruta){

	var vilkenRuta = map.findIndex(zz => zz[vad]==1);

	//console.log (map.findIndex(zz => zz["monster"]==8));
	//var tmp = map[indexZZ].card;
	map[vilkenRuta].card = map[ruta].card;
	console.log(map[ruta].card);
	map[ruta].card = 1;
	console.log("ruta" + vilkenRuta);
	
}




for(var i=0;i<9;i++){
	//map[i].norr+=100;
	map[i].edge="norr";
}
	
for(var i=0;i<73;i=i+9){
	//map[i].vast+=100;
	map[i].edge="vast";
}
for(var i=8;i<81;i=i+9){
	//map[i].ost+=100;
	map[i].edge="ost";
}
for(var i = 72; i < 81; i++){
	//map[i].soder+=100;
	map[i].edge="soder";
}
//map[8].norr+=100;
//map[8].ost+=100;
map[8].edge="cornerNO";
//map[80].soder+=100;
//map[80].ost+=100;
map[80].edge="cornerSO";
//map[72].soder+=100;
//map[72].vast+=100;
map[72].edge="cornerSV";
//map[0].norr += 100;
//map[0].vast += 100;
map[0].edge="cornerNV";

//map[4].norr=99;
map.push({kartbit: 17, namn:"Start", norr:1, soder:1, ost:1, vast:1, typ:"start", bildBG:"img/map_start.png",actionIndex:-1, floors:1});
//map[4]={kartbit:4, namn:"Mimers Brunn", norr:1,soder:1,ost:1,vast:1, typ:"glantaSp", floors:1, actionIndex:0, sak:1};
console.log(map);
console.log(card);
console.log("KLAR MED KARTBITAR");


//wood = new Wood(81);


//kontrollKarta2();
// 0,1,2,3,4,5,6,7,8
// 9...17
//18...26
//27...34
//35...41
//42...48
//49...55
//56...62
//63...71
//72...80
