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
        fulfillmentMessages: [mediaobject:new MediaObject({
          name: 'RTL',
          url: 'http://shoutcast.rtl.it:3010/;mp3',
          image: new Image({
            url: 'http://zappingradioapp.com/images/italia/rtl-102-5.png',
            alt: 'Media icon',
          })
        })]
    });

      /*  return res.json({
            fulfillmentText: 'Something went wrong!',
            source: 'test-webhook-zapping',
            fulfillmentMessages: [mediaobject:new MediaObject({
              name: 'RTL',
              url: 'http://shoutcast.rtl.it:3010/;mp3',
              image: new Image({
                url: 'http://zappingradioapp.com/images/italia/rtl-102-5.png',
                alt: 'Media icon',
              })
            })]
        });*/


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
