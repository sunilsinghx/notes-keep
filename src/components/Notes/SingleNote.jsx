/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import {useNotes} from "../../context/DataProvider"

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: none;
`;

function SingleNote({ note }) {

  const {notes,setNotes,setArchiveNotes,setDeleteNotes} = useNotes()
  function archiveNote(note)
  {
      const updateNotes = notes.filter(curr=> curr.id != note.id)
      setNotes(updateNotes)
      setArchiveNotes(prev=> [...prev,note])
  }
  function deleteNote(note)
  {
    const updateNotes = notes.filter(curr=> curr.id != note.id)
    setNotes(updateNotes)
    setDeleteNotes(prev=> [...prev,note])
  }







  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlinedIcon
          onClick={()=>archiveNote(note)}
          fontSize="small"
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
        <DeleteOutlineIcon fontSize="small" style={{ cursor: "pointer" }
        } 
        onClick={()=>deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
}

export default SingleNote;
