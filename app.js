const express = require("express")
const app =express();
require("dotenv/config")


//middleware body parser
app.use(express.json())
app.get("/", (req,res)=>{
  res.send("Hello Api ")
})

app.listen(process.env.PORT, ()=>{
  console.log(`server is runing ${process.env.PORT}`)
})