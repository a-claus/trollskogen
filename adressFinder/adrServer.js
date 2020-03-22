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
}
jsonCatcher();

console.log(gbgAdr.length);

app.use((req, res, next)=> {console.log(`Info ${req.path} (${req.method})`);
	next();
})

console.log(" vad");

app.post('/endpoint', (req,res)=> {
	console.log("post" + req.body);
	let sokning = req.body;
	let output = [];
	
	//	kontrollera JSON samt värdena
	console.log("post");
	const input = req.body.sok;
	console.log("post" + input);
	
	const { error } = validateInput(req.body);
	if (error){ 
		
		res.status(500).send("Du har använt otilllåtna tecken");
	//res.send(bookningar);
	}
	else
	{
	
	let list=["xyz"];
	let counter=0;
	hitta = new RegExp(input.toLowerCase());
	for (i=0; i < gbgAdr.length; i++){
		if (hitta.test(gbgAdr[i].adr.toLowerCase()) == true) {
			output.push(gbgAdr[i]);
			if (list.indexOf(gbgAdr[i].adr) == -1){
				list.push(gbgAdr[i].adr);
				counter++;
				if (counter > 5) break;
			}
		}

	}

	
	
	
	res.send(output);
}

})









function validateInput(json){
	const schema = {
		//start: Joi.number().integer().required(),
		//slut: Joi.number().integer().required(),
		//dag: Joi.number().integer().required(),
		//manad: Joi.number().integer().required(),
		sok: Joi.string().required(),
		//epost: string().email().lowercase(),
		//tel: Joi.string().min(5).max(11).required()
	}
	return Joi.validate(json, schema);
}

function validateInputTel(json){
	const schema = {
		tel: Joi.string().min(5).max(11).required()
	}
	return Joi.validate(json, schema);
}
