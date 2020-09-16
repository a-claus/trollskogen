let ymdList = [];

let waiting = 0;

function jsonGetter(file="./json/flexpass/flexpass200627.json"){
	console.log("klar22");

$.ajax({
    url: file,
    dataType: 'json',
    success: function( data ) {
      console.log(data);
		console.log("klar2");
		
		jsonFil = jsonFil.concat(data);
    },
    error: function( xhr, status, error ) {
     	document.getElementById("loadLogg").innerHTML += "Inte laddat datum: " + file + "\r" ;
     	console.log(xhr, status, error); 
     	//if (error == "Not Found") console.log("noklar2" + file);
     	//if (xhr.status == 404) console.log(xhr);
    }
  });


}
//jsonGetter();

function getFilNamn(ymd){
	let y = ymd.slice(2, 4);
	let d = ymd.slice(-2, ymd.length);
	let m = ymd.slice(5,-3);
	let mm = month.indexOf(m) + 1;
	if (mm < 10) { mm = "0" + mm; }
	return {filnamn: "./json/flexpass" + y + mm + d + ".json", y:y, m:m, d:d}; 
}

function hamtaDatum(){
	let ymd = document.getElementById("datum1").innerHTML;
	let namn = getFilNamn(ymd);
	jsonGetter(namn.filnamn);
}


function getDateNummer(ymd){
	console.log(ymd);
	let y = parseInt(ymd.slice(2, 4));
	let d = parseInt(ymd.slice(-2, ymd.length));
	
	let m = month.indexOf(ymd.slice(5,-3));
	if (d < 0) m = month.indexOf(ymd.slice(5, -2));
	
	console.log(y, m, d);
	return  {y:y, m:m, d:Math.abs(d)}; 
}

function orderYmd(ymd){
	let byt;
	
	if (ymd[0].y > ymd[1].y){ byt = true;}
	if (ymd[0].y > ymd[1].y){ byt = false;}
	if (ymd[0].m > ymd[1].m && byt == undefined){byt = true;}
	if (ymd[0].m < ymd[1].m && byt == undefined){byt = false;}
	if (ymd[0].d > ymd[1].d && byt == undefined){byt = true;}
	if (ymd[0].d <= ymd[1].d && byt == undefined){byt = false;}
		
	if (byt == false) {
		
		return ymd;
	}
	else{
		
		return [ymd[1], ymd[0]];
	}
}

function nextDay(ymd){
	console.log(ymd, monthDays[ymd.m]);
	let dd = ymd.d + 1;
	let mm = ymd.m;

	//xyz skottår
	if (monthDays[ymd.m] < dd){
		dd = 1;
		mm++;
		if (mm == 12){
			ymd.m = 0;
			ymd.y++;
		}
	}
	return {y:ymd.y, m:mm, d :dd };
}

function getYmdFileName(ymd){
	
	
	let m= ""; let d = "";
	mm = ymd.m + 1;
	if (mm < 10) { m = "0" + mm; } else {m = mm;}
	if (ymd.d < 10) { d = "0" + ymd.d; } else {d = ymd.d;}
	ymdList.push(ymd.y + m + d);
	return "./json/flexpass/flexpass" + ymd.y + m + d + ".json"; 
}

function hamtaIntervallDatum(){
	let ymder = [];
	let ymd = []; let a=0;
	 ymd.push(getDateNummer(document.getElementById("datum1").innerHTML));
	 ymd.push(getDateNummer(document.getElementById("datum2").innerHTML));
	
	ymd = orderYmd(ymd);
	
	ymdList = [];

	
	do {
		ymder.push(getYmdFileName(ymd[0]));
		
		ymd[0] = nextDay(ymd[0]);
		
		
		}
while (ymd[0].y <= ymd[1].y && ymd[0].m <= ymd[1].m && ymd[0].d <= ymd[1].d);

	jsonFil=[]; console.log(ymdList);
for (i=0; i < ymder.length; i++){
	jsonGetter(ymder[i]);
	} 
}
/* getFleraDatum
	
	- Lista ut vilken som är lägst

	_ adda hämtningar upp till slutdatum

	- waitforfiles messar klar

*/
function fyllPassDropdown(array){
	let a = "<option value=";
	let b = "</option>";
	let generated = "";
	

	for (i = 0; i < array.length; i++){
		input = "\'" + array[i].pass + "\'>" + array[i].pass;
		generated += a + input + b;
	}
    
	 document.getElementById("flexpass").innerHTML = generated;
}

function knappval(val){
	let dia;
	//rubrik ="Hej", x_namn="abcdefggrtgtr", y_namn="def", array=[{namn:"a", value :3},{namn:"a", value : 11},{namn:"k", value : 23},{namn:"b", value : 12}], diagramTyp = "stapel"){
	

	switch (val) {
		case 0:
			diagram.array = getAntalNoderPass(jsonFil);

			diagram.rubrik = "Noder på pass";
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
			
		break;
		case 1:
			diagram.array = getAntalResor(jsonFil);
			
			diagram.rubrik = "Antal resor Dag";
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
		break;
		case 2:
			let tur = document.getElementById("flexpass").value;
			diagram.array = antalNoderTur(jsonFil, tur);
			
			diagram.rubrik = "Antal noder på tur: " + tur;
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
		break;
		case 3:
			diagram.array = timeGoing(jsonFil);
			
			diagram.rubrik = "Tid resenär åker";
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
		break;
		case 4:
			
			diagram.array = getAntalNoderPassPerDag(jsonFil, document.getElementById("flexpass").value);
			
			diagram.rubrik = "Noder på: " + document.getElementById("flexpass").value + " för dagar";
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
		break;
		case 5:
			
			diagram.array = getAntalpassagerare(jsonFil, document.getElementById("flexpass").value);
			
			diagram.rubrik = "Antal passagerare";
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
		break;
		case 6:
			
			diagram.array = dubbelLoopaArrayen(antalPassagerarSamtidigt);
			
			diagram.rubrik = "Antal passagerare";
			diagram.y_namn = "";
			diagram.x_namn = "";
			diagram.rita();
		break;
	}
}

let temp ={nasta:0, start: true, passagerare: [],lista: [], topp:0, raknare:0};

function dubbelLoopaArrayen(func){
	for (i=0; i < jsonFil.length; i++){
		temp.start = true;
		for (j=0; j < jsonFil[i].resa.length; j++){
				
			func(i,j);
				
		}
	}
	console.log(temp);
}

var passagerare = [];

function antalPassagerarSamtidigt(i,j){
	let tur;
	//console.log(temp);
	//vi listar toppantal på tur
	//loopa igenom alla pass
		//kontrollera om det är ny tur eller inte
		tur = jsonFil[i].resa[j];
		//console.log(temp.start);

		if (temp.start == true){
			temp.start = false;
			if (i == 0) {temp.lista = []; temp.topp=0}
			if (i != 0){
				console.log(i, "-", j)
				temp.nasta=tur.nod -1;
				passagerare = [];
				temp.lista.push(temp.topp);
				temp.topp = 0;
				temp.raknare=0;
			}
		}	
		
			
			temp.nasta++;
		
			if (tur.nod != temp.nasta){
				temp.nasta = tur.nod;
				console.log("raknare", temp.raknare);
				temp.lista.push(temp.topp);
				temp.raknare=0;
				temp.topp = 0;
				
			}

			if (tur.door == "stiga på"){
				if (tur.restyp != "BOM" || tur.restyp != "error"){
					temp.raknare = temp.raknare + tur.antal;
					passagerare.push(tur.id);
					console.log(passagerare);
				}
			}
			
			if (tur.door == "gå av"){
				
				if (temp.raknare > temp.topp) temp.topp = temp.raknare;
				index = passagerare.indexOf(tur.id);
				if (index != -1){
					temp.raknare = temp.raknare - tur.antal;
					passagerare.splice(index,1);
				}
				else{
					console.log(passagerare);
					console.log("ERROR icke existerande passagerare stiger av", tur.id);
				}


			}
			

}

function findObject(arr, obj, val){
	for (j=0; j < arr.length; j++){
		if (arr[j][obj] == val) return j;
	}
	return -1;
}

function getAntalpassagerare(array){
	let  exportArray = []; let index; let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	let namn = ["RTBA"]; let raknare = [0];
	let antal;
	for (i=0; i < array.length; i++){
		for (j=0; j < array[i].resa.length; j++){
			if (array[i].resa[j].door == "stiga på"){
				index = namn.indexOf(array[i].resa[j].restyp);
				if (index == -1){
					namn.push(array[i].resa[j].restyp)
					raknare.push(0);
					index = raknare.length - 1;
				}
				raknare[index]++;
				antal = array[i].resa[j].antal;
				if (array[i].resa[j].restyp == "BOM") antal = 0;
				arr[antal]++;
			}
			

		}
	}
	for (i=0; i<arr.length; i++){
		if (arr[i] > 0) exportArray.push({namn: i, value: arr[i]});
	}
	for (i=0; i<namn.length; i++){
		if (arr[i] > 0) exportArray.push({namn: namn[i], value: raknare[i]});
	}
	return exportArray;
}

function getAntalNoderPassPerDag(array, aktivtPass){
	//[{namn:"a", value :3},{namn:"a", value : 11
	let  exportArray = []; let index; 

	for (j=0; j < ymdList.length; j++){
		exportArray.push({namn: ymdList[j], value: 0})
	}
	
	for (i=0; i < array.length; i++){
		if (array[i].pass == aktivtPass){
			index = ymdList.indexOf(array[i].datum);
			exportArray[index].value = array[i].resa.length;
		}
	}
	//console.log(exportArray);
 	return exportArray;
}


function getAntalNoderPass(array){
	//[{namn:"a", value :3},{namn:"a", value : 11
	let  exportArray = []; let index;
	
	for (i=0; i < array.length; i++){
		index = findObject(exportArray, "namn", array[i].pass);
		console.log(index);
		if ( index == -1 ){
			exportArray.push({namn: array[i].pass, value: array[i].resa.length});
		} else {
			exportArray[index].value = exportArray[index].value + array[i].resa.length;
		}

	}
	//console.log(exportArray);
 	return exportArray;
}

function getAntalResor(array){
	//[{namn:"a", value :3},{namn:"a", value : 11
	let  exportArray = []; let  datum = []; let aktivtDatum;
	for (i=0; i < array.length; i++){
		console.log(aktivtDatum, array[i].datum);
		if (aktivtDatum != array[i].datum){
			aktivtDatum = array[i].datum;
			exportArray.push({namn: aktivtDatum, value: 0});
		}
		for (j=0; j < array[i].resa.length; j++){

			if (array[i].resa[j].door == "stiga på"){
				exportArray[exportArray.length - 1].value++;
			}
		}
	}		
	
	console.log(exportArray);
 	return exportArray;


}

function antalNoderTur(array, tur){
	let  exportArray = []; let ny = true; let c = 0;
	
	//tur = "831";
	for (i=0; i < array.length; i++){
		
		if (tur == array[i].pass){
		for (j=0; j < array[i].resa.length; j++){
			if (ny == true) {
				ny = false
				c = array[i].resa[j].nod - 1;
				//if (isNaN(c) == true)
				//	c = parseInt(c.replace("U", ''))-1;  
				exportArray.push({namn: array[i].resa[j].tid , value: 0});
			}
				c++;
			//d =
			if (array[i].resa[j].nod == c){
				{exportArray[exportArray.length - 1].value++;}
			} else{
				c = array[i].resa[j].nod;
				//c = parseInt(c.replace("U", ''));  
				exportArray.push({namn: array[i].resa[j].tid , value: 1});
			}
		}
		}
	}
	return exportArray;

}

function timeGoing(array){
	let arr = []; let hour; let min;
	let  exportArray = []; let  datum = []; let aktivtDatum;
	for (i=0; i < array.length; i++){
		console.log(aktivtDatum, array[i].datum);
		if (aktivtDatum != array[i].datum){ } ///xyz
		for (j=0; j < array[i].resa.length; j++){
			if (array[i].resa[j].door == "stiga på"){
				hour = Math.floor(parseInt(array[i].resa[j].tid) / 100) * 100;
				min =  parseInt(array[i].resa[j].tid) - hour;
				console.log("B", min);
				min = Math.floor(min / 15) * 15;
				console.log("c", min);
				arr.push(parseInt(hour + min));
				console.log("A", arr[arr.length-1]);
			}
		}
	}		
	i = 800; min = 0; hour = 800;
	while (i < 1700){
		exportArray.push({namn: i , value: 0});
		for (j=0; j < arr.length; j++){
			if (arr[j] == i){
				exportArray[exportArray.length - 1].value++;
			}
		}
		min += 15
		if (min == 60) {min =0; hour+=100;}
		i = hour + min;



	}

	
 	return exportArray;


}
