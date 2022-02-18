import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(noteId) {
    console.log("id " + noteId);
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Add={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
