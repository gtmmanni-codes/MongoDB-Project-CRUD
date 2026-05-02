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

1. Created a variable to import express using require.
2. Imported dbConnection function.
3. Created .get function using async-await to show data.
4. Created .post function using async-await to insert data.
5. After connection is established created a collection named students and try to insert data.
