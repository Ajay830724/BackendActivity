const express= require("express");
const data= require("./data.json");
const app=express();
const port=3000;

app.set("view engine","ejs");

app.get("/insta/:user",(req,res)=>{
    let {user}= req.params;
    let person=data[user];
    console.log(person);
    if(user){
        res.render("user.ejs",{person});
    }else{
        res.render("error.ejs");
    }
       
});

app.use('/',(req,res)=>{
    // console.log(data);
    res.render("account.ejs",{data});
})
app.listen(port,()=>{
    console.log(`App is listining on port ${port}`);
});