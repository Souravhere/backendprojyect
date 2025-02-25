const mongoose = require('mongoose');   

mongoose
.connect('mongdb://127.0.0.1:27017/shop')
.then(() =>{
    console.log('Connected to database');
})
.catch((err) =>{
    console.log('Error connecting to database', err);
})

module.exports = mongoose.connection;