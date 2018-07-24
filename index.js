"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const {dialogflow,BasicCard,SimpleResponse,
  Image,Suggestions,MediaObject,actionssdk} = require('actions-on-google');



const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.post('/test', (req, res) => {

  var notFoundResponseEN="I wasn't able to find the requested radio. Please, try to articulate the radio's name or ask for another station. So, which radio station would you like to listen to?";

  var request = require('request');
  request.post({url:'http://zappingradioapp.com/mobileapp/zappingapi.php', form: {key:"rtl",action:6}},
                function (error, response, body) {

                  if (!error && response.statusCode == 200) {
                      var result = JSON.parse(body);
                      if(result["success"]==1){

                        return res.json({
                        source: 'test-webhook-zapping',
                        "payload": {
                          "google": {
                            "expectUserResponse": true,
                            "richResponse": {
                              "items": [{  "simpleResponse": {  "textToSpeech": "Play Radio "+result["name"]}}
                              ,{"mediaResponse": {
                                  "mediaType": "AUDIO",
                                      "mediaObjects": [
                                        {
                                          "name": result["name"],
                                          "largeImage": {
                                            "url": "http://www.zappingradioapp.com"+result["image"],
                                            "accessibilityText": "Media icon"
                                          },
                                          "contentUrl": result["stream"]
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
                      });

                      }else{
                        return res.json({fulfillmentText:notFoundResponseEN})
                      }
                    }
                    else{
                      return res.json({fulfillmentText:notFoundResponseEN})
                    }
  });

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
