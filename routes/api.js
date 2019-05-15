/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const express = require('express')
const ObjectID = require('mongodb').ObjectID;
const Joi = require('joi')
const { client: mongoClient, dbName } = require('../config/mongo')

const router = express.Router()

const issueSchema = Joi.object().keys({
  issue_title: Joi.string().required(),
  issue_text: Joi.string().required(),
  created_by: Joi.string().required(),
  assigned_to: Joi.string().default(''),
  status_text: Joi.string().default('')
})


const CONNECTION_STRING = process.env.DB;
//MongoClient.connect(CONNECTION_STRING, function(err, db) {});

router.get('/:project', function(req, res, next) {
  const project = req.params.project;

})

router.post('/:project', function(req, res, next) {
  const project = req.params.project;
  const { error, value: issueData } = Joi.validate(req.body, issueSchema)

  if(error) {
    return res.status(400).json({ error })
  }

  const now = new Date().toISOString()

  issueData.created_on = now
  issueData.updated_on = now
  issueData.open = true
  
  mongoClient.db(dbName).collection(project).insertOne(
    issueData,
    function(err, result) {
      if(err) {
        return next(err)
      }

      return res.status(200).json(result.ops[0])
    }
  )
})

router.put('/:project', function(req, res, next) {
  const project = req.params.project;

})

router.delete('/:project', function(req, res, next) {
  const project = req.params.project;

})


module.exports = router;
