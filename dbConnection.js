
// Import MongoDB client from mongodb package
const { MongoClient } = require('mongodb');

// Database URL (local MongoDB server)
const dataBaseURL = 'mongodb://localhost:27017';

// Create a new MongoDB client instance
const client = new MongoClient(dataBaseURL);

let dbConnection = async()=>{
    await client.connect();
    let myDB = client.db("DB_Project");
    return myDB;

}


module.exports={dbConnection};


