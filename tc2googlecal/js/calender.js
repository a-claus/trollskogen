const month = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
const skotte = 29;

$.getJSON("./json/flexpass200708.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});
/*
colorSchema
---------------
*/
const brun = "#8b4513"; 
const vald_brun="#deb887" ; 
const ovald_brun ="#fff8dc"; 
const pre =" #deb887";
const red1 ="#fe967e";
const red2 ="#c10044";
const red3 = "#dd0144";

let Y = new Date().getFullYear();
let M = new Date().getMonth();
let D = new Date().getDate();
let dag = new Date().getDay()-1;
if (dag == -1) dag=6;

let dagEtt= new Date(Y, M, 1).getDay() -1;
if (dagEtt == -1) dagEtt = 6;

let dagEttNext = new Date(Y, M + 1, 1).getDay() -1;
if (dagEttNext == -1) dagEttNext = 6;
console.log(M +" " +dagEttNext);







function drawKalender(manad = M, year = Y){
	//Det vi vill veta först vilken dag är första dagen på månaden
let array = [];
array = getFieldManad(manad);
console.log(array.length);


// RUBRIK	
let output = '<div id=\" rad\" class=\" menyrad\">';
output += '<div id=\"tidigare\" \" class=\"pilar\" onclick=\"bytManad(' + manad + ', this.id)\"> < </div>';
output += '<div class=\"calRubrik\">' + uppfirst(month[manad]) +  " " + year + "</div>";	
output += '<div id=\"senare\" class=\"pilar\" onclick=\"bytManad(' + manad + ', this.id)\"> > </div>';
for (var i = 0; i < array.length; i++){
	// ____RADEN________
			if (i % 7 == 0) { //nyrad
				if (i == 0) {
					output += '<div id=\" rad\" class=\" menyrad\">';
				}
				else{
					output += "</div>";
					output += '<div id=\" rad\" class=\" vanlig\">';

				}		
			}
	//_____ RUTORNA_____________

		if (isNaN(array[i]) == true){
		//Dagbokstaver
				ide = "dagRuta";
				classe = "meny";
				text = array[i];
			}
			//Tomma rutor
			else if (array[i]==0){
				ide = "dagRuta";
				classe = "tom";
				text = "";
			}
			else 
			//Datumen	
			{
				classe = "dag";
			//	click= "";
			ide = "dagRuta " + manad +"."+ array[i];
				text = array[i];
			}	
			output += '<div id=\"'+ ide + '\"' ;
			output += ' class=\"' + classe + '\"';
			output += 'onclick=\"datumclick(this)\" dag=\"' + array[i] + '\" manad=\"' + manad + '\" year=\"' + year + '\"'
			
			output += '>';	
			output +=  text 
			output += '</div>';			
			
	}
	output +="</div>";

	
	document.getElementById("kalender").innerHTML = output;
	
}


function bytManad(manad, id){
	console.log(manad,id);
 let MM = parseInt(manad);
 console.log(MM);

	if (id == "senare") MM++;
	if (id == "tidigare") MM--;

	if (MM == 12) {year++; MM = 0;}
	if (MM== -1) {MM= 11; year--;}
	
	drawKalender(MM);
}

function datumclick(a){
	console.log("aa");
	console.log(a);
}

function getFieldManad(manad){

let array = []; let skotte=0;
 array = ["M", "T", "O", "T", "F", "L", "S"];
if (manad==1) {
	if (kollaSkotte(Y) == true) skotte=1;
}
console.log (array);
let dagEtt = new Date(Y, manad, 1).getDay() -1;
if (dagEtt == -1) dagEtt = 6;

for (var i=0; i < dagEtt; i++){
		array.push(0);
}

for (i = 1; i < monthDays[manad]+1 + skotte; i++){
	array.push(i);
}


return array;
}

function kollaSkotte(year){
	if (year%4==0){
		if (year%100==0){
			if(year%400 == 0) return true;
			return false;
		}
		return true;
	}
}



function uppfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
