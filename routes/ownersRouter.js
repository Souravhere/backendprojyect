const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model')
 
// this is the env for development
if(process.env.NODE_ENV === 'development'){ 
    router.post('/create',async (req, res) => {
        const owner = await ownerModel.create()
        if(owner.lenth > 0){
            return res
            .send(503)
            .send("You don't have premission to create a new Owner")
        }
    })
}
router.get('/', (req, res) =>{
    res.send('Welcome to Owner Route')
})

module.exports = router; 