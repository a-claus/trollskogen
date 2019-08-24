const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
//var fs = require('fs');

//var router = express.Router

app.use(express.static('public')); 
//app.set('view engine', 'pug');
//app.use(express.json());


const port = process.env.PORT || 3003;
app.listen(3003, () => console.log(`Lyssnar på localhost: ${port} ....`));




app.get('/', (req,res)=> {

	res.render('index');

})


