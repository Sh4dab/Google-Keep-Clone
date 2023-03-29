import { styled, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import Form from "./form";
import { createTheme } from '@mui/material/styles';
import Note from "./printNote";

import { useContext } from "react";
import { DataContext } from "../dataProvider";
import { Grid } from "@mui/material";
import EmptyNotes from "./DefaultPage";

const theme = createTheme();
const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


export default function Notes() {

    const { notes } = useContext(DataContext);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Form />
                    {
                        notes.length > 0 ?
                            <Grid container style={{ marginTop: 16 }}>
                                {
                                    notes.map(note => (
                                        <Grid key={note.id} item>
                                            <Note note={note} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            :
                            <EmptyNotes />
                    }

                </Box>
            </Box>
        </ThemeProvider>
    )
}