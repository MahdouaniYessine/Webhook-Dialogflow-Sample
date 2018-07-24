"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));

server.post('/test', (req, res) => {

        return res.json({
            speech: 'Something went wrong!',
            displayText: 'Something went wrong!',
            source: 'Zapping Radio +'
        });

});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
