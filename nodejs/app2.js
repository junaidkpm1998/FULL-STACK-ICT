const express = require('express');
const exphbbs = require('express-handlebars');

var app = express();



app.engine('handlebars', exphbbs({ defaultLayout: 'mainh' }));
app.set('view engine', 'handlebars');
app.use(express.static('views/static'))
app.use(express.urlencoded());


app.get('/home', (req, res) => {
    res.render('homeh');
});

app.get('/contact', (req, res) => {
    res.render('contacth');

});


app.listen(3003)