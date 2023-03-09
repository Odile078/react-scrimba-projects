import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import SideBar from "./components/SideBar";
import "react-mde/lib/styles/css/react-mde-all.css";
import { data } from "./data/notes";
import { nanoid } from "nanoid";
// import { data } from "./data";
function App() {
  const [openSidebar, setOpenSideBar] = useState(false);
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text) => {
    setNotes((oldNotes) => {
      let newArray = [];
      oldNotes.map((oldNote) => {
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      });
      return newArray;
    });
  };

  const findCurrentNote = () => {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  };

  const deleteNote = (noteId) => {
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  };
  const saveNoteToLocalStorage = () =>
    localStorage.setItem("notes", JSON.stringify(notes));

  useEffect(() => {
    saveNoteToLocalStorage();
  }, [notes]);
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
          deleteNote={deleteNote}
        />
        <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
      </div>
    </div>
  );
}

export default App;
