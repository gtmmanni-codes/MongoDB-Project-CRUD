let express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
let app = express();
app.use(express.json());


//.get to create read function 
app.get("/student-read",async(req,res)=>{
     let newDB = await dbConnection();
    let newCollection = newDB.collection("Students");
    let data = await newCollection.find().toArray(); //showing data in array format.
    let obj1 ={
        status:1,
        msg:"Data",data
    };   
    res.send({obj1 });
});


app.delete("/student-delete/:id",async(req,res)=>{
    let {id} = req.params; 
    let newDB = await dbConnection();
    let newCollection = newDB.collection("Students");
    let delRes = await newCollection.deleteOne({_id:new ObjectId(id)});

    let obj1 ={
        status:1,
        msg:"Delete Data",delRes
    };   

    res.send(obj1);


})

//.post to create insert function 
app.post("/student-insert",async(req,res)=>{
    let newDB = await dbConnection();
    let newCollection = newDB.collection("Students");
    
    let obj={
        "sName":req.body.name,
        "sEmail":req.body.email
    }

    //inserting data 
    let insertData = await newCollection.insertOne(obj)

  

    
    console.log(obj);



    res.send({obj});
})

app.put("/student-update/:id", async (req, res)=>{
    let {id}=req.params; //Where
    let {name, email}=req.body;
    
    });











    













app.listen("8000",()=>{
    console.log("Server Working properly")
});
