import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "Note title",
    content: "Take a note..."
  });
  const [state, setState]=useState(false)


  function handleInput(event) {
    const { name, value } = event.target;

    setNoteText((oldValue) => {
      return {
        ...oldValue,
        [name]: value
      };
    });
  }

function handleClick(){
  setState(!state)
}


  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.Add(noteText);
          setNoteText("");
          event.preventDefault();
        }}
      >
        {state && <input
          onChange={handleInput}
          name="title"
          placeholder={noteText.title}
          value={noteText.title}
        />}
      
        <textarea
          onChange={handleInput}
          name="content"
          placeholder={noteText.content}
          value={noteText.content}
          onClick={handleClick}
          rows={state?"3":"1"}
        />
        <Zoom in={state} style={{ transitionDelay : "200ms" }}>
        <Fab type="submit">
          <AddIcon />
        </Fab>
        </ Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
