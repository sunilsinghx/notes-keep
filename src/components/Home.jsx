import SwipeDrawer from "./SwipeDrawer"
import Notes from "./Notes/Notes.jsx"
import { Box } from "@mui/material"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import ArchiveNotes from  "./archive/ArchiveNotes.jsx"
import DeleteNotes from "./delete/DeleteNotes.jsx"

function Home() {
  return (
    <Box style={{display:"flex" ,width:"100%"}}>
    <BrowserRouter>
    <SwipeDrawer/>
      <Routes>
        <Route path="/" element={<Notes/>}/>
        <Route path="/archive" element={<ArchiveNotes/>} />
        <Route path="/delete" element={<DeleteNotes/>} />
        <Route/>
      </Routes>
    </BrowserRouter>
      
    </Box>
 
  )
}

export default Home