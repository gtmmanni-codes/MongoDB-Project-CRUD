let express = require("express");
const { dbConnection } = require("./dbConnection");
let app = express();
app.use(express.json());

app.get("/student-read",async(req,res)=>{
    res.send("Student read API");
});

app.post("/student-insert",async(req,res)=>{
    let newDB = await dbConnection();
    let newCollection = newDB.collection("Students");
    let obj={
        "sName":req.body.name,
        "sEmail":req.body.email
    }
    
    console.log(obj);
    


    res.send("Student insert API");
})

app.listen("8000");
