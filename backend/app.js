import express from "express";
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-route";


const app=express();

app.use(express.json());


app.use("/api/user", router) ;
app.use("/api/blog", blogRouter);

mongoose
.connect('mongodb+srv://sparashar5102001:snigdha@cluster0.zwi8b1n.mongodb.net/BlogApp?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to db and listening to localhost 5000")
).catch((err)=>console.log(error));
app.listen(5001);

