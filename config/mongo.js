const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1'
const client = new MongoClient(url)
const dbName = 'issue-tracker'

module.exports = {
    client,
    dbName,
}
