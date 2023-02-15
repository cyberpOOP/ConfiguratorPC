const express = require("express");

const PORT = 3001;

const app = express();

app.get("/", (req, res)=>{
    res.send("puk");
});


app.listen(PORT, ()=>{
    console.log("Server is listening on http://localhost:"+PORT+" puk, puk");
});
