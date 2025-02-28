const mongoose = require('mongoose');  
const config = require('config');
// here we will setup the debug env 
// to deactive this >> export DEBUG= press enter  
const dbgr = require('debug')('development:mongoose'); 

mongoose
.connect(`${config.get('MONGODB_URI')}/shop`)
.then(() =>{
    dbgr('Connected to database');
})
.catch((err) =>{
    dbgr('Error connecting to database', err);
})

module.exports = mongoose.connection;