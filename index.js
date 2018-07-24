"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const {dialogflow,BasicCard,SimpleResponse,
  Image,Suggestions,MediaObject} = require('actions-on-google');
  
var request = require('request');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.post('/test', (req, res) => {


  var radio_name='RTL';
  var radio_image=url_backend+'/images/italia/rtl-102-5.png';
  var radio_stream='http://shoutcast.rtl.it:3010/;mp3';

        return res.json({
            fulfillmentText: 'Something went wrong!',
            source: 'test-webhook-zapping'
            fulfillmentMessages: new MediaObject({
              name: radio_name,
              url: radio_stream,
              image: new Image({
                url: radio_image,
                alt: 'Media icon',
              }),
            })
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
