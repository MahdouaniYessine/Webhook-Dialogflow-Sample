"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const {dialogflow,BasicCard,SimpleResponse,
  Image,Suggestions,MediaObject,actionssdk} = require('actions-on-google');

var request = require('request');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.post('/test', (req, res) => {
  return res.json({
        fulfillmentText: 'Something went wrong!',
        source: 'test-webhook-zapping',
        fulfillmentMessages: [ "card":{
        "title": "card title",
        "subtitle": "card text",
        "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
        "buttons": [
          {
            "text": "button text",
            "postback": "https://assistant.google.com/"
          }
        ]
      }
    }]
    });


});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});







/*var formData = {key:'rtl',action:6}
request.post({url:'http://zappingradioapp.com/mobileapp/zappingapi.php', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});*/
