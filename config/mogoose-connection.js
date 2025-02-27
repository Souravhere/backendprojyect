const mongoose = require('mongoose');  
// here we will setup the debug env 
// to deactive this >> export DEBUG= press enter  
const dbgr = require('debug')('development:mongoose'); 
const config = require('config');

mongoose
.connect('/shop')
.then(() =>{
    dbgr('Connected to database');
})
.catch((err) =>{
    dbgr('Error connecting to database', err);
})

module.exports = mongoose.connection;