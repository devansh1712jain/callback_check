const express = require('express')
const cors = require('cors') 
const app = express();

app.use(express.json())
app.use(cors());
app.put('/',(req,res)=>{
    const body = req.body;
    console.log({body})
    res.send({"body":body})
})
app.listen(5000,()=>{
    console.log("server started at port 5000")
});
