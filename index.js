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

  var data = {key:'rtl',action:6}
  request.post({url:'http://zappingradioapp.com/mobileapp/zappingapi.php', form: data}, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return  err;
    }
  return res.json(res);
  });

  /*return res.json({
  source: 'test-webhook-zapping',
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [{  "simpleResponse": {  "textToSpeech": "Play Radio RTL"}}
        ,{"mediaResponse": {
            "mediaType": "AUDIO",
                "mediaObjects": [
                  {
                    "name": "RDS",
                    "largeImage": {
                      "url": "http://www.zappingradioapp.com/images/italia/6/11106.png",
                      "accessibilityText": "Media icon"
                    },
                    "contentUrl": "http://46.37.20.205:8000/rdsmp3"
                  }
                ]
              }
            }
        ],
          "suggestions": [
            {
              "title": "Pause Radio"
            }
          ]
      }
    }
  }
});*/

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
