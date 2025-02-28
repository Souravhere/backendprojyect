const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model')
 

router.get('/', (req, res) =>{
    res.send('Welcome to Owner Route')
})
if(process.env.NODE_ENV === 'development'){ 
    router.get('/create',(req, res) => {
        res.send('Owner Created');
    })
}

module.exports = router; 