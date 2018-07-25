"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const {dialogflow,BasicCard,SimpleResponse,
  Image,Suggestions,MediaObject} = require('actions-on-google');



const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.post('/test', (req, res) => {
  var notFoundResponseEN="I wasn't able to find the requested radio. Please, try to articulate the radio's name or ask for another station. So, which radio station would you like to listen to?";

switch(req.body.queryResult.languageCode.substr(0,2)){
  case "it":  notFoundResponseEN="Non sono riuscita a trovare la radio richiesta. Prova a scandire il nome o cambia stazione, per favore. Allora, quale radio vorresti ascoltare?";
    break;
}
return res.json({fulfillmentText:req.body.queryResult.parameters.any+", "+notFoundResponseEN})

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
