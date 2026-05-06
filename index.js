let express = require("express");
const { dbConnection } = require("./dbConnection");
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
    let newDB = await dbConnection();
    

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

app.listen("8000",()=>{
    console.log("Server Working properly")
});
