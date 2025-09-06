const Question= require('../models/Question');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res)=>{
    const question = await new Question(req.body);
    question.save()
    return res.json({data:question});
})

router.get('/',async(req,res)=>{
    const question= await Question.find().populate('subject');
    return res.json({data:question})
})

router.delete('/:id', async(req,res)=>{
    const{id}=req.params
    const question = await Question.findByIdAndDelete(id)
    // session.save();
    return res.json({delete:question})
})
router.put('/:id', async(req,res)=>{
    const { id }= req.params
    const question= await Question.findByIdAndUpdate(id, req.body, {new:true})
    return res.json({success:true,data:question})
})
module.exports = router