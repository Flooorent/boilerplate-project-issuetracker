/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const server = require('../server');

const { client: mongoClient } = require('../config/mongo')

chai.use(chaiHttp).should();

describe('Functional Tests', function() {

  before(function(done) {
    mongoClient.connect(function(err, result) {
      if(err) {
        console.log("Couldn't connect mongo client")
        throw new Error(err)
      }

      console.log("Mongo client connected")
      done()
    })
  })

  after(function(done) {
    mongoClient.close(function(err, result) {
      if(err) {
        console.log("Couldn't close mongo client connection")
        throw new Error(err)
      }

      console.log("Mongo client connection closed")
      done()
    })
  })
  
  describe('POST /api/issues/{project} => object with issue data', function() {
      it('should fill in every field', function(done) {
        const issueTitle = 'Title'
        const issueText = 'text'
        const createdBy = 'Functional Test - Every field filled in'
        const assignedTo = 'Chai and Mocha'
        const statusText = 'In QA'

        const beforeCall = new Date()
        
        chai.request(server)
          .post('/api/issues/test')
          .send({
            issue_title: issueTitle,
            issue_text: issueText,
            created_by: createdBy,
            assigned_to: assignedTo,
            status_text: statusText
          })
          .end(function(err, res){
            const afterCall = new Date()

            res.should.have.status(200);
            res.should.be.json
            res.body.should.be.an('object')
            res.body.should.have.property('issue_title')
            res.body.should.have.property('issue_text')
            res.body.should.have.property('created_by')
            res.body.should.have.property('assigned_to')
            res.body.should.have.property('status_text')
            res.body.should.have.property('created_on')
            res.body.should.have.property('updated_on')
            res.body.should.have.property('open')
            res.body.should.have.property('_id')
            res.body.issue_title.should.equal(issueTitle)
            res.body.issue_text.should.equal(issueText)
            res.body.created_by.should.equal(createdBy)
            res.body.assigned_to.should.equal(assignedTo)
            res.body.status_text.should.equal(statusText)
            
            res.body.created_on.should.be.above(beforeCall)
            res.body.created_on.should.be.below(afterCall)
            
            // TODO: finish assertions
            
            done();
          });
        });

      /*
      created_on(date/time)
      updated_on(date/time)
      open(boolean, true for open, false for closed)
      _id.
      */
      
      it('Required fields filled in', function(done) {
        
      });
      
      it('Missing required fields', function(done) {
        
      });
      
    });
    
    describe('PUT /api/issues/{project} => text', function() {
      
      it('No body', function(done) {
        
      });
      
      it('One field to update', function(done) {
        
      });
      
      it('Multiple fields to update', function(done) {
        
      });
      
    });
    
    describe('GET /api/issues/{project} => Array of objects with issue data', function() {
      
      it('No filter', function(done) {
        chai.request(server)
        .get('/api/issues/test')
        .query({})
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.be.an('array')
          res.body[0].should.have.property('issue_title')
          res.body[0].should.have.property('issue_text')
          res.body[0].should.have.property('created_on')
          res.body[0].should.have.property('updated_on')
          res.body[0].should.have.property('created_by')
          res.body[0].should.have.property('assigned_to')
          res.body[0].should.have.property('open')
          res.body[0].should.have.property('status_text')
          res.body[0].should.have.property('_id')
          done();
        });
      });
      
      it('One filter', function(done) {
        
      });
      
      it('Multiple filters (test for multiple fields you know will be in the db for a return)', function(done) {
        
      });
      
    });
    
    describe('DELETE /api/issues/{project} => text', function() {
      
      it('No _id', function(done) {
        
      });
      
      it('Valid _id', function(done) {
        
      });
      
    });

});
