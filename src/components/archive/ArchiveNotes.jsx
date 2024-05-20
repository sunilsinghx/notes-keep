import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useNotes } from "../../context/DataProvider";
import EmptyNotes from "../Notes/EmptyNotes";
import SingleNote from "../Notes/SingleNote"

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function ArchiveNotes() {
  const { archiveNotes } = useNotes();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {archiveNotes.length > 0 ? (
          <Grid container style={{ marginTop: "16px" }}>
            {archiveNotes.map((note) => (
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

export default ArchiveNotes;
