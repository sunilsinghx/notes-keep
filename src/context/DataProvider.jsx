/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const NoteContext = createContext(null);

function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deleteNotes, setDeleteNotes] = useState([]);
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deleteNotes,
        setDeleteNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}

export default NoteProvider;
