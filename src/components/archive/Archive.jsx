/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    styled,
  } from "@mui/material";
  
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
  import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
  import {useNotes} from "../../context/DataProvider"
  
  const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: none;
  `;
  
  function SingleNote({ note }) {
  
    const {archiveNotes,setNotes,setArchiveNotes,setDeleteNotes} = useNotes()
    function UnarchiveNote(note)
    {
        const updateNotes = archiveNotes.filter(curr=> curr.id != note.id)
        setNotes(prev=>[...prev,note])
        setArchiveNotes(updateNotes)
    }
    function deleteNote(note)
    {
      const updateNotes = archiveNotes.filter(curr=> curr.id != note.id)
      setNotes(prev=>[...prev,note])
      setDeleteNotes(prev=> [...prev,note])
    }
  
  
  
  
  
  
  
    return (
      <StyledCard>
        <CardContent>
          <Typography>{note.heading}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
          <UnarchiveOutlinedIcon
            onClick={()=>UnarchiveNote(note)}
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
  