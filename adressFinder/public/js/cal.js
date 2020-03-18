const month = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
const skotte = 29;



let ajaxAct;
let ajaxTextSvar;

function getAndSend(inpatt){
	ajaxTextSvar= "Massage " + (tidForBookning-1)*15 + " minuter är bokad " + bokningsStart + " " + bokningsDag+" "+month[bokningsManad] + "!";  
	ajaxAct = "bokning";
    console.log(bokningsStart);
    const theInput = {
    	sok :document.getElementById("tel").value};
    
    postAjax('/', inpatt);
}




function postAjax(path, obj){


$.ajax({
  type: 'POST',
  url: path,
  data: obj,
  success: function (json, status){
  			console.log("retur",status);
  			console.log("retur",json);
  			document.getElementById("textrad").innerHTML="";
  			document.getElementById("output_sokAdress").innerHTML = ajaxTextSvar;
  			document.getElementById("output_sokAdress").style.color="green";
  			//document.getElementById("form").style.visibility="hidden";

  
  },
  error: function(text){
  	document.getElementById("output_sokAdress").innerHTML=text.responseText;
  	document.getElementById("output_sokAdress").style.color="red";
      //console.log(text.responseText);
      
  }
});

/*
 	$.post(path, obj, 
 		function (json, status){
			alert(status);
			 	timeSchema = json;
				start();
		


 		})*/
}

console.log("hmm1");
 
 


console.log("hmm2");




function deleteTid(id){

let num = findID(id);
msg = "Ta bort " + timeSchema[num].tel + " " + timeSchema[num].text + " " + timeSchema[num].dag + " " + month[timeSchema[num].manad] ;
	
	let a  = confirm(msg);
	if (a==true){
	ajaxAct="deleteTid";
	const avbokningsId = {
		id : id};
	ajaxTextSvar= "Tid borttagen";

	postAjax('/delete', avbokningsId);}

}

 /* 
 ------- TODO --------------
	 - Något fel räknaren på sluttid som sparas.
	 - Skicka epost
	 - ändra size
	 - lägg in backgrund
	 - månadsrensning
 */

 