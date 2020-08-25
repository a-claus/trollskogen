//Access-Control-Allow-Origin: *


function jsonGetter(file="./json/test.json"){
	console.log("klar22");

$.ajax({
    url: file,
    dataType: 'json',
    success: function( data ) {
      console.log(data);
		console.log("klar2");
		jsonFil=data;
    },
    error: function( xhr, status, error ) {
     	
     	console.log(xhr, status, error); 
     	if (error == "Not Found") console.log("noklar2");
     	if (xhr.status == 404) console.log("noklar23");
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

	do {
		d++;
		if (d < monthDays(m)) {
			
		}
	}
while (datum < final)

}

function hamtaIntervallDatum(){
	let ymd = [document.getElementById("datum1").innerHTML, document.getElementById("datum2").innerHTML];
	//ymd.sort();

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
	}
}

function getAntalNoderPass(array){
	//[{namn:"a", value :3},{namn:"a", value : 11
	let  exportArray = [];
	
	for (i=0; i < array.length; i++){
		
		exportArray.push({namn: array[i].pass,value:array[i].resa.length});

	}
	console.log(exportArray);
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
			//console.log(i, j);
			//console.log(array[i].resa[j].door, i, j, array[i].resa[j].id);
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
