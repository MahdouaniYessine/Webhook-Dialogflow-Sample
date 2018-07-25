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

return res.json({fulfillmentText:req.body.queryResult.parameters.any+" "+req.body.queryResult.languageCode.substr(0,2)})

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
