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
  
  function Delete({ note }) {
  
    const {deleteNotes,setDeleteNotes} = useNotes()
  
    function deleteNote(note)
    {
      const updateNotes = deleteNotes.filter(curr=> curr.id != note.id)
      setDeleteNotes(updateNotes)
    }
  
  
  
  
  
  
  
    return (
      <StyledCard>
        <CardContent>
          <Typography>{note.heading}</Typography>
          <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
         
          <DeleteOutlineIcon fontSize="small" style={{ cursor: "pointer" , marginLeft: "auto"}
          } 
          onClick={()=>deleteNote(note)}
          />
        </CardActions>
      </StyledCard>
    );
  }
  
  export default Delete;
  