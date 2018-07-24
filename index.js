"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

app.intent('test', conv => {
  conv.ask('really?');
});


express().use(bodyParser.json(), app).listen(3000);
