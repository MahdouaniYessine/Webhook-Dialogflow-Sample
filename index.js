'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow,BasicCard,SimpleResponse,
  Image,Suggestions,MediaObject} = require('actions-on-google');

const express = require('express')
const bodyParser = require('body-parser')


// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

/*express.post('/test', function(request, response) {
  conv.ask('Are You Sure?')
});*/




app.intent('test', conv => {
  conv.ask('Are You Sure?')
});

express().use(bodyParser.json(), app).listen(3000);
