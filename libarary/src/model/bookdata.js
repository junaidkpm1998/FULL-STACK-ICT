const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libaryAppMangoose2');
const schema = mongoose.Schema;

var NewBookSchema =new schema({
title: String,
author: String,
genre : String,


});
var bookdata = mongoose.model('book-data',NewBookSchema);
module.exports = bookdata;