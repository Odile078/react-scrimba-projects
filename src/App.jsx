import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Editor from "./components/Editor";
import SideBar from "./components/SideBar";
import "react-mde/lib/styles/css/react-mde-all.css";
import { data } from "./data/notes";
// import { data } from "./data";
function App() {
  const [openSidebar, setOpenSideBar] = useState(false);
  const [notes, setNotes] = React.useState(data || []);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }
  console.log(notes);
  return (
    <div className="bg-gray-300 h-screen overflow-hidden ">
      <div className="flex gap-2 ">
        <SideBar
          openSidebar={openSidebar}
          setOpenSideBar={setOpenSideBar}
          notes={notes}
          currentNote={findCurrentNote()}
          setCurrentNoteId={setCurrentNoteId}
          newNote={createNewNote}
        />
        <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
      </div>
    </div>
  );
}

export default App;
