const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Create a new note
router.post('/', async (req, res) => {
    try {
        const newNote = new Note({
            title: req.body.title,
            description: req.body.description,
        });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a note
router.put('/:id', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a note
router.delete('/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Note deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
        const newNote = new Note({
            title: req.body.title,
            description: req.body.description,
        });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a note
router.put('/:id', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a note
router.delete('/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Note deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
