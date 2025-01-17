const path = require("path");

const HomepageUserModel =  require("../model/pageModel");
const asyncHandler= require("express-async-handler");
const bcrypt = require("bcrypt");

const homepage = (req,res)=>{
res.sendFile(path.join(__dirname,"public","homepage.html"))
};

const login = (req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"));
}

const signup = (req,res)=>{
    res.sendFile(path.join(__dirname,"public","signup.html"));
}
const aftersignup = asyncHandler( async (req,res)=>{

    const {username,password} = req.body;
    console.log(username);
    console.log(password);
    //hashed pass

    const hashed_password= await bcrypt.hash(password,10);

    const userdetail = await HomepageUserModel.create({
        user_name:username,
        password:hashed_password
    });
    res.status(201);
    console.log(userdetail);
    res.redirect("/login");


});


const afterlogin = asyncHandler( async (req,res)=>{
    const {username,password} = req.body;
    const is_exits =  await HomepageUserModel.find({username});
    if(is_exits && bcrypt.compare(password,is_exits.password))
    {
        res.redirect("/indexx.html");
    }
    else
    {
        res.status(400);
        console.log("username/passord is not valid");
        res.redirect("/login");
    }
})
module.exports = {homepage,login,signup,aftersignup,afterlogin};