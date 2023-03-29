import styled from "@emotion/styled"
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { useContext } from "react";
import { DataContext } from "../dataProvider";

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    // box-shadow: none;
`;

export default function Note({ note }) {

    const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setAcrchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard >
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive
                    className="buttons"
                    fontSize="medium"
                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                    onClick={() => archiveNote(note)}
                />
                <Delete
                    className="buttons"
                    fontSize="medium"
                    onClick={() => deleteNote(note)}
                    style={{ cursor: 'pointer' }}
                />
            </CardActions>
        </StyledCard>
    )
}