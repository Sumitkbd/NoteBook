import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new note
  const addNote = () => {
    if (title.trim() && description.trim()) {
      const newNote = { title, description, id: Date.now() }; // Add an id to each note
      setNotes([...notes, newNote]);
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill out both the title and description fields');
    }
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>NoteBook</h1>

      {/* Total Notes Counter */}
      <p>Total Notes: {notes.length}</p>
      
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Counter for Showing Notes */}
      <p>Showing: {filteredNotes.length} notes</p>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Add Button */}
      <button onClick={addNote}>Add To Book</button>

      {/* Notes Display */}
      <div className="notes-list">
        {filteredNotes.map((note) => (
          <div key={note.id} className="note">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            {/* Delete Button */}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
