
// Import MongoDB client from mongodb package
const { MongoClient } = require('mongodb');

// Database URL (local MongoDB server)
const dataBaseURL = 'mongodb://localhost:27017';

// Create a new MongoDB client instance
const client = new MongoClient(dataBaseURL);

// Function to establish database connection
let dbConnection = async()=>{

     // Connect to MongoDB server
    await client.connect();
    let myDB = client.db("DB_Project");

    // Return database object for use in other files
    return myDB;

}


module.exports={dbConnection};


