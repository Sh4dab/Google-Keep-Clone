import { Box } from "@mui/material"
import Notes from "./notes/notes"
import SideDrawer from "./sideDrawer"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeleteNotes from "./deletedNotes/deleteNote";
import ArchiveNotes from "./archiveNotes/archiveNote";

function Home() {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
            <Router>
                <SideDrawer />
                <Routes>
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/archive' element={<ArchiveNotes />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                </Routes>
            </Router>
        </Box>
    )
}
export default Home