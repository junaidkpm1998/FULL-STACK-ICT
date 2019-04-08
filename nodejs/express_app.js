const express =require('express');//loading express
var app =express();//function aakki  variable kk vechu
app.get('/',(req,res)=>{
    res.send('[{"name":"junaid","age":21},{"name":"arjun","age":24}]')
   // res.send("<marquee><b>u r welcome</b></marquee>")

});
app.get('/home',(req,res)=>{
    res.send("<h1 style=color:green><marquee><b>  u r welcome to home</b></marquee></h1>")
});
app.get('/contact',(req,res)=>{
    res.send("this is contact page")

});

app.listen(3000)//local host:(/)3000 chromeil adikkuka