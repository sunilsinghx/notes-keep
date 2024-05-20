import { Box, Grid } from "@mui/material";

import { useNotes } from "../../context/DataProvider";
import EmptyNotes from "../Notes/EmptyNotes";
import Delete from "./Delete";

function DeleteNotes() {
  const { deleteNotes } = useNotes();
  return (
    <Box sx={{ display: "flex", width: "100%", marginTop:"40px" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        {deleteNotes.length > 0 ? (
          <Grid container style={{ marginTop: "16px" }}>
            {deleteNotes.map((note) => (
              <Grid item key={note.id}>
                <Delete note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
}

export default DeleteNotes;
