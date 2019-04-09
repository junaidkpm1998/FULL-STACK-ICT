const express =require('express');//loading express
const exphbs=require('express-handlebars');

var app =express();

//function aakki  variable kk vechu

app.engine('handlebars',exphbs());
app.set('view engine','handlebars');
app.get('/',(req,res)=>{
     res.render('index')
//app.get('/',(req,res)=>{
   // res.send('[{"name":"junaid","age":21},{"name":"arjun","age":24}]')
   // res.send("<marquee><b>u r welcome</b></marquee>")

});
app.get('/home',(req,res)=>{
     res.render('home');
});
//app.get('/home',(req,res)=>{
  //  res.send("<h1 style=color:green><marquee><b>  u r welcome to home</b></marquee></h1>")
//});
app.get('/contact',(req,res)=>{
    res.send("this is contact page")

});

app.listen(3002)//local host:(/)3000 chromeil adikkuka