const express=require('express')
const chalk=require('chalk');
const path=require('path');
const booksRouter=express.Router();

var app=express();
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")));

booksRouter.route('/')
.get((req,res)=>{
    res.render('index',{
        nav:[
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'}

        ],
        title:" books"
        
    });
});
booksRouter.route('/single')
.get((req,res)=>{
    res.send("hello books single");
});
booksRouter.route('/single')
.get((req,res)=>{
    res.send("hello books single");
});
app.use('/books',booksRouter);
app.get('/',(req,res)=>{
    res.render('index',{
        nav:[
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'}

        ],
        title:" Libarary"
        
    });
});
app.listen(3009,()=>{
    console.log('listening to port'+chalk.green('3009'));
});