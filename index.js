const express=require("express");
const userModel = require("./models/user");
const postModel = require("./models/post");
const app=express();


app.get("/",(req,res)=>{
    res.send("hello world");
});

app.get("/create", async (req,res)=>{
    let user = await userModel.create({
        username:"paras vishwakarma",
        email:"paras@gmail.com",
        age:20

     });
     res.send(user);
});

app.get("/post/create", async (req,res)=>{
     let post = await postModel.create({
        postdata:"hello new post",
        user:"67c3ff30f52a0473eaaea611"
     
    });
    let user = await userModel.findOne({_id:"67c3ff30f52a0473eaaea611"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})

app.listen(5000,()=>{
    console.log(`the server is running on ${5000}`);
});