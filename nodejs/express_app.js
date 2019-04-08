const express =require('express');//loading express
var app =express();//function aakki  variable kk vechu
app.get('/',(req,res)=>{
    res.send("<marquee><b>u r welcome</b></marquee>")

});
app.get('/home',(req,res)=>{
    res.send("<marquee><b>u r welcome to home</b></marquee>")
});
app.get('/contact',(req,res)=>{
    res.send("this is contact page")

});

app.listen(3000)//local host:(/)3000 chromeil adikkuka