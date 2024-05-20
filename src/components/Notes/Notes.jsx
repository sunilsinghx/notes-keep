import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import Form from "./Form";
import SingleNote from "./SingleNote";
import { useNotes } from "../../context/DataProvider";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function Notes() {
  const { notes } = useNotes();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />

        {notes.length > 0 ? (
          <Grid container style={{ marginTop: "16px" }}>
            {notes.map((note) => (
              <Grid item key={note.id}>
                <SingleNote note={note} />
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

export default Notes;
