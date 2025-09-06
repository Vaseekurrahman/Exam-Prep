const express= require('express')
const router = express.Router();
const Subject = require('../models/Subject');
const Session = require('../models/Session');

router.post('/', async(req,res)=>{
    const subject = new Subject(req.body)
    subject.save();
    return res.json({message:"Subject Added Successfully"})
})

router.get('/',async(req,res)=>{
    const subject = await Subject.find();
    return res.json({data:subject})
})

router.delete('/:id', async(req,res)=>{
    const{id}=req.params
    const session = await Session.findByIdAndDelete(id)
    // session.save();
    return res.json({dalete:session})
})

router.put('/:id', async(req,res )=>{
    const {id}= req.params
    const session = await Session.findByIdAndUpdate(id,req.body)
    return res.json({message:"updated successfully"})
})

module.exports = router