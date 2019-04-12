const express=require('express')
const chalk=require('chalk');
const path=require('path');
const authorRouter=express.Router();

var app=express();
nav=[
    {link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'},
    {link:'/addbook',title:'addbook'}

];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminroutes')(nav);

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',adminRouter);



app.get('/',(req,res)=>{
    res.render('index',{
        nav,
        title:" Libary"
        
    });
});

authorRouter.route('/')
.get((req,res)=>{
    res.render('authors',{
        nav,
        title:"Author"
        
    });
});




app.listen(3000,()=>{
    console.log('listening to port'+chalk.red('3000'));
});