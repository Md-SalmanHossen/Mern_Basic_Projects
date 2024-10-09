
const express=require('express');
const Note=require('../models/noteSchema');
const router=express.Router();


//  read a file
router.get('/', async(req,res)=>{
    try{
        const notes=await Note.find();
        res.status(200).json(notes)
    }catch(error){
        res.status(500).json({message:'server error'})
    }
})


//  create a new file
router.post('/', async(req,res)=>{
    try{
        const newNote= new Note({
            tittle:req.body.title,
            description:req.body.description,
        });
        await newNote.save();
        res.status(201).json(newNote)
    }catch(error){
        res.status(500).json({message:'server error'})
    }
});


//  update a file
router.put('/:id', async(req,res)=>{
    try{
        const updateNotes=await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(updateNotes)
    }catch(error){
        res.status(500).json({message:'server error'})
    }
});


//  delete a file
router.delete('/:id', async(req,res)=>{
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(2000).json({message:'Note Deleted'})
    }catch(error){
        res.status(500).json({message:'server error'})
    }
});

module.exports=router;