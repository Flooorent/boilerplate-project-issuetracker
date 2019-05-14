/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const express = require('express')
const mongo = require('mongodb');

const router = express.Router()
const MongoClient = mongo.MongoClient
const ObjectId = mongo.ObjectID;

const CONNECTION_STRING = process.env.DB;
//MongoClient.connect(CONNECTION_STRING, function(err, db) {});

router.get('/:project', function(req, res, next) {
  const project = req.params.project;

})

router.post('/:project', function(req, res, next) {
  const project = req.params.project;

})

router.put('/:project', function(req, res, next) {
  const project = req.params.project;

})

router.delete('/:project', function(req, res, next) {
  const project = req.params.project;

})


module.exports = router;
