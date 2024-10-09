import React from 'react';

const NoteCard = ({ note, onEdit, onDelete }) => {
    return (
        <div className="bg-gray-100 p-4 rounded shadow-md">
            <h2 className="font-bold">{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={() => onEdit(note)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                Edit
            </button>
            <button onClick={() => onDelete(note._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
            </button>
        </div>
    );
};

export default NoteCard;
