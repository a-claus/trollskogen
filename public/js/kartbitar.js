console.log("kartbitar laddas")



var card=[];
card.push({id:0, namn:"Skatten", vad:"skatt", url: "./js/cards/egblomma.js",no:[]});
card.push({id:1, namn:"blank", vad:"blank",no:[]});
card.push({id:2, namn:"Lilltroll", vad:"monster", url: "./js/cards/troll.js", antal: 3,no:[]});
card.push({id:3, namn:"Trollmor", vad:"monster",color:"black", styrka:2, liv:1, no:[]});
card.push({id:4, namn:"Trollfar", vad:"monster",color:"black", styrka:3, liv:1, vinst:2, width:21, height:21, f_text:"Trollmor står och lagar tomtesoppa.", no:[]});
card.push({id:5, namn:"Svamp", url:"./js/cards/svamp.js",no:[]});
card.push({id:6, namn:"Blåbär", url:"./js/cards/blabar.js", no:[]});
card.push({id:7, namn:"Hugin och Munin", url: "./js/cards/huginmunin.js" ,no:[]});
card.push({id:8, namn:"Alven", url:"./js/cards/alven.js",no:[]});
card.push({id:9, namn:"Vildvittra", url:"./js/cards/vildvittra.js",no:[]});
card.push({id:10, namn:"Lyktstolpe", url:"./js/cards/lyktstolpe.js", no:[4]});
card.push({id:11, namn:"Sandorm", vad:"monster", url: "./js/cards/sandorm.js", no:[]});

card[1000] = {id:1000, namn:"Gravsten", url:"./js/cards/gravsten.js", no:[]};


var kartbit=[];//hej

kartbit.push({index: 0, namn:"Road", norr:1,soder:1,ost:1,vast:1, typ:"glanta",floors:1, actionIndex:-1}); // 5
kartbit.push({index: 1, namn:"Road",norr:0,soder:1,ost:1,vast:1, typ:"glanta",floors:1, actionIndex:-1});    //  5
kartbit.push({index: 2, namn:"Road",norr:1,soder:0,ost:1,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 3 ,namn:"Road",norr:1,soder:1,ost:1,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 4,namn:"Road",norr:1,soder:1,ost:0,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 5 ,namn:"Road",norr:1,soder:1,ost:0,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 6,namn:"Road",norr:1,soder:0,ost:0,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 7 ,namn:"Road",norr:1,soder:0,ost:1,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 8 ,namn:"Road",norr:0,soder:0,ost:1,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 9,namn:"Road",norr:0,soder:1,ost:1,vast:0, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 10,namn:"Road",norr:0,soder:1,ost:0,vast:1, typ:"glanta",floors:1,actionIndex:-1});
kartbit.push({index: 11,namn:"FyraBroVO",norr:1,soder:1,ost:2,vast:2, typ:"bro",floors:2,actionIndex:-1});
kartbit.push({index: 12,namn:"FyraBroNS",norr:2,soder:2,ost:1,vast:1, typ:"bro",floors:2,actionIndex:-1});
kartbit.push({index: 13,namn:"Svärdet i stenen", norr:1,soder:1,ost:1,vast:1, typ:"glantaSp", floors:1, actionIndex:0, download:true});
kartbit.push({index: 14,namn:"Mimers Brunn", norr:1,soder:1,ost:1,vast:1, typ:"glantaSp", floors:1, download: true});
kartbit.push({index: 15,namn:"Ravin1", norr:2, soder:1, ost:2, vast:1, typ:"stup", floors:2, actionIndex:-1, download:true}); //, download:true
kartbit.push({index: 16,namn:"Ravin2",norr:2,soder:1,ost:1,vast:2, typ:"stup",floors:2,actionIndex:-1, download:true});
kartbit.push({index: 17,namn:"Hyllan",norr:1,soder:1,ost:1,vast:1, typ:"glantaSp",floors:1, actionIndex:-1});
kartbit.push({index: 18, namn:"Ravin3",norr:1,soder:2,ost:1,vast:2, typ:"glantaSp", floors:2, actionIndex:-1, download: true});
kartbit.push({index: 19, namn:"Ravin4",norr:1,soder:2,ost:2,vast:1, typ:"glantaSp", floors:2, actionIndex:-1, download:true});
kartbit.push({index: 20, namn: "Start", norr: 1, soder: 1, ost: 1, vast: 1, typ: "start", bildBG: "/img/map_start.png", floors:1, actionIndex:-1, download:true});


var map=[]; 




function lottaCards(){
	var crupier=[]; let cardval;
	for (var j=0; j<81; j++){
		cardval = Math.floor(Math.random() * 11) + 1;
		if (card[cardval].no.findIndex != j){
		 crupier.push(cardval);}
		else
			{j--;}
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


function makeMap(){
var y=0;

for (var i = 0; i < 81; i++){
	if (kartbit[y].typ != "glanta") {crupier[i] = 1;}

 		map[blanda[i]] = {
 			namn: kartbit[y].namn, 
 			norr: kartbit[y].norr, 
 			soder: kartbit[y].soder, 
 			ost: kartbit[y].ost, 
 			vast: kartbit[y].vast, 
 			typ: kartbit[y].typ, 
 			floors: kartbit[y].floors,
 			download: kartbit[y].download,
 			kartbit: y,
 			card: crupier[i]
 			//card: 1
 		};
 
 	y++;
 	if (y == 20){ y = 0; } //lottar ut kartbitar
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
//bytPlats("Hyllan"); //newBagv1
//bytPlats("Svärdet i stenen"); //newBagv1
//bytPlats(0,"card"); //skatt // newBagv1
//bytPlats("FyraBroNS");
//bytPlats("FyraBroVO");
//bytPlats("Mimers Brunn"); // newBagv1 saknar effekt
//bytPlats(8,"card"); //alven newBagv1 waitv1
//bytPlats(7,"card"); //hugin newBagv1 waitv1
//bytPlats(5,"card"); //svamp newBagv1 wait v1
//bytPlats(6,"card"); //6 Blåbär klar: z och foto waitv1
//bytPlats( 2, "card" ); //Lilltroll saknar effekt
//bytPlats( 9, "card" ); //Vildvittra wait
//bytPlats( 10, "card" ); //Lyktstolpe wait v1
//bytPlats("Ravin1"); //Ravin1
//bytPlats("Ravin2"); //Ravin2
bytPlats(11, "card"); //sandorm


function bytPlatsMedBlank(namn, vad, ruta){

	var vilkenRuta = map.findIndex(zz => zz[vad]==1);

	//console.log (map.findIndex(zz => zz["monster"]==8));
	//var tmp = map[indexZZ].card;
	map[vilkenRuta].card = map[ruta].card;
	console.log(map[ruta].card);
	map[ruta].card = 1;
	console.log("ruta" + vilkenRuta);
}
for(var i =0;i<9;i++) {map[i].edge="norr";}	
for(var i=0;i<73;i=i+9) {map[i].edge="vast";}
for(var i=8;i<81;i=i+9) {map[i].edge="ost";}
for(var i = 72; i < 81; i++) {map[i].edge="soder";}
console.log("check2");
map[8].edge="cornerNO";

map[80].edge="cornerSO";

map[72].edge="cornerSV";

map[0].edge="cornerNV";

//map[4].norr=99;
//kartbit: 18, 
map.push({namn:"Start", kartbit:20, norr:1, soder:0, ost:0, vast:0, typ:"start", bildBG:"img/map_start.png",actionIndex:-1, floors:1, download: true});
//map.push({namn:"Start", norr:1, soder:1, ost:1, vast:1, typ:"start", bildBG:"img/map_start.png",actionIndex:-1, floors:1, download: true});

console.log(map);
console.log(card);
console.log("KLAR MED KARTBITAR");
//startGame();
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
