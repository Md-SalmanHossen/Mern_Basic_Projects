import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [noteToEdit, setNoteToEdit] = useState(null);

    const fetchNotes = async () => {
        const { data } = await axios.get('http://localhost:5000/api/notes');
        setNotes(data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/notes/${id}`);
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="container mx-auto">
            <NoteForm fetchNotes={fetchNotes} noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {notes.map((note) => (
                    <NoteCard key={note._id} note={note} onEdit={setNoteToEdit} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default NotesList;
