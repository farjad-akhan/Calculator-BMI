
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("The result is "+result);
});

app.get("/BMIcalculator",function(req,res){
  res.sendFile(__dirname+"/BMIcalculator.html")
});

app.post("/BMIcalculator",function(req,res){
  var h=Number(req.body.h);
  var w=Number(req.body.w);
  var result=w/(h*h);
  res.send("Your BMI is "+ result);
});

app.listen(3000,function(){
  console.log("Server started at port 3000");
});
