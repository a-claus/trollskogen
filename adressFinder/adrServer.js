const Joi =require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var fs = require('fs');


//var app = express.createServer();

//app.use(express.bodyParser());
//const path = require('path');
//const nodeMailer = require('nodemailer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('public'));





const port = process.env.PORT || 3010;
app.listen(3010, () => console.log(`Lyssnar på localhost: ${port} ....`));


let gbgAdr;

function jsonCatcher(){
	
	let data=fs.readFileSync("./public/json/adresser.json");
	gbgAdr=JSON.parse(data);
	console.log(gbgAdr.length);
	//let data2=fs.readFileSync("./public/json/nummer.json");
	//nummer=JSON.parse(data2);
	
}
jsonCatcher();

console.log(gbgAdr.length);

app.use((req, res, next)=> {console.log(`Info ${req.path} (${req.method})`);
	next();
})

console.log(" vad");

app.post('/endpoint', (req,res)=> {
	console.log("ajax");
	let sokning = req.body;
	let output = [];
	
	//	kontrollera JSON samt värdena
	console.log("post");
	const input = req.body.sok;
	console.log("post" + input);
	
	/*const { error } = validateInput(req.body);
	if (error){ 
		
		res.status(500).send("Telefonnumret är inte korrekt");
	//res.send(bookningar);
	}
	 else if (controlNummer(nyBookning.tel)== "BAD")
	{
		console.log("bad");
		res.status(500).send("Det här numret är inte registrerat och vill du boka online får du be Paula registrera ditt telefonnummer.");
		//res.send(bookningar, "Du är inte registrerad för att boka online. Om du själv inte ringer, så kommer Paula höra av sig inom kort till dig.");
	} 	
	else
	{*/
		console.log("next");
	//console.log(req.body);
	//	skapa object
		
		
	//lägga till id och status
	hitta = new RegExp(input);
	for (i=0; i < gbgAdr.length; i++){
		if (hitta.test(gbgAdr[i].adr) == true) {
			output.push(gbgAdr[i]);
			if (output.length > 5) break;
		}

	}
	
	console.log(output);
	
	
	res.send(output);


})




function controlNummer(nummerIn){
	nummerIn = nummerIn.replace("-", "");
	var pos = nummer.findIndex(ii => ii.tel === nummerIn);
	if (pos != -1){
		return "OK";
	}
	return "BAD";
}




function validateInput(json){
	const schema = {
		start: Joi.number().integer().required(),
		slut: Joi.number().integer().required(),
		dag: Joi.number().integer().required(),
		manad: Joi.number().integer().required(),
		tider: Joi.string().required(),
		//epost: string().email().lowercase(),
		tel: Joi.string().min(5).max(11).required()
	}
	return Joi.validate(json, schema);
}

function validateInputTel(json){
	const schema = {
		tel: Joi.string().min(5).max(11).required()
	}
	return Joi.validate(json, schema);
}
