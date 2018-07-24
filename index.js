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
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "This is a Basic Card:"
            }
          },
          {
            "basicCard": {
              "title": "Card Title",
              "image": {
                "url": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                "accessibilityText": "Google Logo"
              },
              "buttons": [
                {
                  "title": "Button Title",
                  "openUrlAction": {
                    "url": "https://www.google.com"
                  }
                }
              ],
              "imageDisplayOptions": "WHITE"
            }
          }
        ]
      }
    }
  }
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
