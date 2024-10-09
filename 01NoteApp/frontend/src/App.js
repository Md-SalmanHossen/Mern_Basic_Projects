import React from 'react';
import NotesList from './components/NotesList';
import './index.css'; // Ensure TailwindCSS is included

const App = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-4">
            <h1 className="text-center text-2xl font-bold mb-4">MERN Notes App</h1>
            <NotesList />
        </div>
    );
};

export default App;
