import { styled, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import Deleted from "./delete";

import { useContext } from "react";
import { DataContext } from "../dataProvider";
import { Grid } from "@mui/material";


const theme = createTheme();
const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


export default function DeleteNotes() {

    const { deleteNotes } = useContext(DataContext);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Grid container style={{ marginTop: 50 }}>
                        {
                            deleteNotes.map(delNote => (
                                <Grid key={delNote.id} item>
                                    <Deleted note={delNote} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    )
}