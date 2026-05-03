let express = require("express");
const { dbConnection } = require("./dbConnection");
let app = express();
app.use(express.json());

app.get("/student-read",async(req,res)=>{
     let newDB = await dbConnection();
    let newCollection = newDB.collection("Students");
    let data = await newCollection.find().toArray();
    let obj1 ={
        status:1,
        msg:"Data",data
    };   
    res.send({obj1 });
});

app.post("/student-insert",async(req,res)=>{
    let newDB = await dbConnection();
    let newCollection = newDB.collection("Students");
    
    let obj={
        "sName":req.body.name,
        "sEmail":req.body.email
    }
    let insertData = await newCollection.insertOne(obj)

  

    
    console.log(obj);



    res.send({obj});
})

app.listen("8000");
