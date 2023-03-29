import styled from "@emotion/styled"
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';

import { useContext } from "react";
import { DataContext } from "../dataProvider";

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    // box-shadow: none;
`;

export default function Deleted({ note }) {

    const { notes, setNotes, deleteNotes, setDeleteNotes } = useContext(DataContext);

    const restoreNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Delete
                    className="buttons"
                    fontSize="medium"
                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                    onClick={() => deleteNote(note)}
                />
                <Restore
                    className="buttons"
                    fontSize="medium"
                    onClick={() => restoreNote(note)}
                    style={{ cursor: 'pointer' }}
                />

            </CardActions>
        </StyledCard>
    )
}