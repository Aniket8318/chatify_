//const express=require('express');
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";


import authRoutes from "./routes/auth.route.js"; 
import messageRoutes from "./routes/message.route.js"; 

dotenv.config();

const app=express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const _dirname= path.resolve();



const PORT = process.env.PORT || 3000;



app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


//make ready for deployment 
if (process.env.NODE_ENV  === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
  });

}





app.listen(PORT,()=>
{
    console.log("server is listining on port  300");
})