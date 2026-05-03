# MongoDB-Project-CRUD

Implementation of mongoDB with express and following CRUD operation

## Connection

To connect mongoDB with express :

1. After downloading app I Create a different file to attach monogoDB to make it easy for file handling and better understanding of code.
2. I used require to call mongoDB from mongoClient .
3. Then stored URL ('mongodb://localhost:27017') of out database in a variable (dataBaseURL).
4. To make connection more fine we can use port number instead of localhost which is 127.0.0.1 i.e. ('mongodb://127.0.0.1:27017')
5. Then created a async await function to connect with client (It acts like a bridge between your express app and MongoDB)
6. Afterwards, I used module.exports to export that function to our main index file.

## Index file

1. First, I imported express and created an app using it.
2. Then I imported dbConnection function to connect MongoDB database.
3. I used express.json() to read JSON data from request body.
4. After that, I created two APIs:
   GET API to read data
   POST API to insert data
5. Used async-await in both APIs to handle database operations.
6. Created and used collection named Students.

## Inserting data

In this part, I created API to insert student data into MongoDB.

**Endpoint: /student-insert**
**Method: POST**

Working steps:

1.  First, connection is established using dbConnection().
2.  Then selected collection Students using:
    newDB.collection("Students")

3.  After that, I created an object named obj:
    let obj = {
    "sName": req.body.name,
    "sEmail": req.body.email
    }
4.  Data is taken from request body (req.body).
5.  Then inserted data into MongoDB using:

                    insertOne(obj)

6.  Finally, response is sent back to user.
    Example JSON (Request Body):
    {
    "name": "John",
    "email": "john@example.com"
    }

## Read data

In this part, I created API to read all student data from MongoDB.

**Endpoint: /student-read**
**Method: GET**

Working steps:

1.  First, connection is established using dbConnection().
2.  Then selected collection Students.
3.  Used find() function to get all records:

            newCollection.find()

4.  Since data is in cursor form, I used:

            toArray()

    to convert it into array.

5.  Stored result in data variable.
6.  Created object obj1:

            let obj1 = {
            status: 1,
            msg: "Data",
            data
            }

7.  Finally, sent response using:

            res.send({ obj1 });
