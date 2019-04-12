const express=require('express')
const booksRouter=express.Router();
function router(nav){
var books=[
    {
        title:"war&peace",
        genre:"historical fn",
        author:"junaid"

    },
    {
        title:"dq nilambur",
        genre:"dq movies",
        author:"riyas"

    },
    {
        title:"comarade",
        genre:"revolution",
        author:"arjun"

    },
    {
        title:"fathu va",
        genre:"islamic faith",
        author:"jiffry"

    },
    {
        title:"aadujeevitham",
        genre:"pravaasam",
        author:"benyamin"

    }

]

booksRouter.route('/')
.get((req,res)=>{
    res.render('books',{
        nav,
        title:" books",
        books


        
    });
});

booksRouter.route('/:id')
.get((req,res)=>{
   const id = req.params.id;
   res.render(
       'book',
       {
           nav:[{link:'/books',title:'Books'},{link:'/authors',title:'Authors'}],title:"Libarary",
           book: books[id]
       }



   );
});
return booksRouter;
}
module.exports = router;