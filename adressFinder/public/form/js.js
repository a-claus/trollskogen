
function sortera(input){
	
	var inputLength=input.length;
	input=input.toLowerCase();
	var listOutput="";
	//var i=-1;
	for (var i=adresser.length-1; i>-1;i--){
		var str = adresser[i].adress.slice(0, inputLength);
		
		
		if (str==input) {
			
			listOutput+=skrivaRad(i);}
	}
	if(listOutput.length==0){
		var link = 
		listOutput="<a class='alternativ' href= '/pug/form/" + input + "'>";//
		listOutput+="Vill du registrera ny adress";
		listOutput+="</a>";
	}
		document.getElementById("listan").innerHTML=listOutput;

	
	
}

function skrivaRad(i){
	
	var text="<br />";

	//länk
	text+="<a class='alternativ' onclick='skrivaJson("+i+")'>";
	//text
	text+=adresser[i].adress;
	text+="</a>";
	//console.log(adressVal);
	return text;
}

function skrivaJson(i){
	var text="<br />";
	text+="<p>" + adresser[i].adress; +"<p/>";
	text+="<p>" + adresser[i].notering; +"<p/>";
	
	skrivIn(i);	

document.getElementById("listan").innerHTML=i+" "+text;

}
