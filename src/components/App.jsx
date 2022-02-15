import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  var notesList = "notesList";

  var initialNotesList = JSON.parse(localStorage.getItem(notesList)) === null ? [] : JSON.parse(localStorage.getItem(notesList));

  const [notes, setNotes] = useState(initialNotesList);


  function addNote(newNote) {
    setNotes(prevNotes => {
      var x = [...prevNotes, newNote];
      localStorage.setItem(notesList, JSON.stringify(x));
      return x;
    });
    // console.log(notes);
    // localStorage.setItem(notesList, JSON.stringify(notes));
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      var x = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      localStorage.setItem(notesList, JSON.stringify(x));
      return x;
    });
    
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
