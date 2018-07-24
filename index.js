"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json());

server.post('/test', (req, res) => {

console.log('hook request');

        return res.json({
            fulfillmentText: 'Something went wrong!',
            source: 'test-webhook-zapping'
        });

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
