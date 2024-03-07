const express = require("express")
const app =express();
const morgan =require("morgan")
const mongoose =require("mongoose")

//middleware body parser
app.use(express.json())
app.use(morgan('tiny'))
//env file fetch if require line all file  direct use
require("dotenv/config")
const api = process.env.API_URL;
app.get(`${api}/products`, (req,res)=>{
  const products ={
    id:1,
    name:"kishan yadav",
    image:"kishan.jpg"
  }
  res.send(products)
})

app.post(`${api}/products`, (req,res) =>{
  const newProduct =req.body;
  console.log(newProduct);
  res.send(newProduct)
})
app.get("/", (req,res)=>{
  res.send("Hello Api ")
})

mongoose.connect(process.env.DATA_BASE_URL).then((conn)=>{
  console.log("Database connection Done...")
}).catch((err)=>{
  console.log(err)
})

app.listen(process.env.PORT, ()=>{
  console.log(`server is runing ${process.env.PORT}`)
})