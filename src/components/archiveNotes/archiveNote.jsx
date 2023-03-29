import { styled, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import Archive from "./archive";

import { useContext } from "react";
import { DataContext } from "../dataProvider";
import { Grid } from "@mui/material";


const theme = createTheme();
const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


export default function ArchiveNotes() {

    const { archiveNotes } = useContext(DataContext);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />

                    <Grid container style={{ marginTop: 50 }}>
                        {
                            archiveNotes.map(archive => (
                                <Grid key={archive.id} item>
                                    <Archive note={archive} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    )
}