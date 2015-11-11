var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');




app.use('/', express.static(__dirname +'/public'))

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

app.listen(8091);