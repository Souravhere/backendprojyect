const mongoose = require('mongoose');  
// here we will setup the debug env 
// to deactive this >> export DEBUG= press enter  
const dbgr = require('debug')('development:mongoose'); 

mongoose
.connect('mongodb://127.0.0.1:27017/shop')
.then(() =>{
    dbgr('Connected to database');
})
.catch((err) =>{
    dbgr('Error connecting to database', err);
})

module.exports = mongoose.connection;