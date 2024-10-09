import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes, noteToEdit, setNoteToEdit }) => {
    const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
    const [description, setDescription] = useState(noteToEdit ? noteToEdit.description : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (noteToEdit) {
                await axios.put(`http://localhost:5000/api/notes/${noteToEdit._id}`, { title, description });
            } else {
                await axios.post('http://localhost:5000/api/notes', { title, description });
            }
            fetchNotes();
            setTitle('');
            setDescription('');
            setNoteToEdit(null);
        } catch (error) {
            console.error('Error saving note:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border p-2 mb-2 w-full"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border p-2 mb-2 w-full"
                required
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {noteToEdit ? 'Update' : 'Add'} Note
            </button>
        </form>
    );
};

export default NoteForm;
