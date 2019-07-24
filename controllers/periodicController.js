//IMPORTS
var path = require('path');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');

//Element JSON
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('element.json', 'utf8'));
//var data = ;
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});
//----------------------------------------------

//MODEL


//connect to database
mongoose.connect('mongodb://knowledgebaum:password1@ds163870.mlab.com:63870/periodic_microbes')

//create schema
var periodicSchema = new mongoose.Schema({
	number: String,
	Elname: String,
	symbol: String,
	feature: String,
	gram_P_N: String,
	order: String

});


var Element = mongoose.model('Element', periodicSchema);

// Add Elments to Mongo DB


function addElementsToMongo(jsonObj) {
	elementDictionary = obj;

	var elementObject = [];
	count = 1;
	for (e in elementDictionary) {
		elementObject[count] = Element({
			number: e,
			Elname: elementDictionary[e]['name'],
			symbol: elementDictionary[e]['symbol'],
			feature: elementDictionary[e]['features'],
			gram_P_N: elementDictionary[e]['gram'],
			order: elementDictionary[e]['order']

		}).save((err, data) => {
			if (err) throw err;

		})
		//console.log(elementDictionary[e]['name']);
		count += 1;

	}
	return 'Data added to Mongo';

};
//===============================================***~~~~~~~

//addElementsToMongo(obj) 			//ADDS ELEMENTS TO MONGO


//=============================================*****~~~~~~~~

//ROUTES
module.exports = (periodicApp) => {

	//periodic table  NORMAL
	periodicApp.get('/', (req, res) => {
		//-----
		//     data.push(req.body);
		//     res.json(data);
		//____
		console.log(__dirname + '/../periodicTable.html')
		res.sendFile('periodicTable.html', {
			root: '.'
		});
	});

	//From DATABASE
	periodicApp.get('/mongoTable', (req, res) => {

		Element.find({}, (err, data) => {
			if (err) throw err;
			res.render('emptyTable', {
				elements: data
			});

		});

	});
    //AJAX view
	periodicApp.get('/ajax', (req, res) => {

		Element.find({}, (err, data) => {
			if (err) throw err;
			res.json({
				'elements': data
			});
			//console.log(res.json( {elements: data});
			//console.log(res.json( {elements: data});
			//console.log(bodyParser.json(data ))
		});

	});

    //EMPTY table using Jquery
	periodicApp.get('/empty', (req, res) => {
		//open html (/periodicTable.html)
		//search elements, symbols (div: class="at_num" , class="symbol", class="at_details" @ [innner text])
		//remove, replace elements, symbols (at_num='', symbol='sym', at_details='details')
		//display html
		res.sendFile('periodicTable.html', {
			root: '.'
		});
	});



}

