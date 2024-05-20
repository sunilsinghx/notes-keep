import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRef, useState } from "react";
import { useNotes } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  box-shadow: 0 1px 2px 0 rgb(60 64 67/30%), 0 2px 6px rgb(60 64 67/15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #0e0e0e;
  margin: auto;
  width: 600px;
  min-height: 36px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

function Form() {
  const [showTextField, setShowTextField] = useState(false);
  const containerRef = useRef(null);
  const [singleNote, setSingleNote] = useState({ ...note, id: uuid() });

  const { setNotes} = useNotes();
  function onTextAreaClick() {
    setShowTextField(true);
    containerRef.current.style.minHeight = "30px";
  }

  function handleClickAway() {
    setShowTextField(false);
    containerRef.current.style.minHeight = "36px";

    setSingleNote({...singleNote,id:uuid()})

    //add in notes
    if (singleNote.heading && singleNote.text) {
      setNotes(prev=> [...prev, singleNote])
    }

    setSingleNote(note);

  }

  function onTextChange(e) {
    const { name, value } = e.target;

    setSingleNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef} style={{display:"flex",flexDirection:"column"}}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            name="heading"
            onChange={(e) => onTextChange(e)}
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10,  }}
            value={singleNote.heading}
          />
        )}
        <TextField
          onClick={onTextAreaClick}
          placeholder="Take a note..."
          multiline
          name="text"
          maxRows={Infinity}
          onChange={(e) => onTextChange(e)}
          InputProps={{ disableUnderline: true }}
          style={{ marginBottom: 10,outline:"none" }}
          value={singleNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
}

export default Form;
