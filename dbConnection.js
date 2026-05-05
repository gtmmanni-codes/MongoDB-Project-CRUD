
// Import MongoDB client from mongodb package
const { MongoClient } = require('mongodb');
const dataBaseURL = 'mongodb://localhost:27017';
const client = new MongoClient(dataBaseURL);

let dbConnection = async()=>{
    await client.connect();
    let myDB = client.db("DB_Project");
    return myDB;

}


module.exports={dbConnection};


