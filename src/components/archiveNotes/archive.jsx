import styled from "@emotion/styled"
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { useContext } from "react";
import { DataContext } from "../dataProvider";

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    // box-shadow: none;
`;

export default function Archive({ note }) {

    const { setNotes, archiveNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const UnarchiveNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setAcrchiveNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setAcrchiveNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Unarchive
                    className="buttons"
                    fontSize="medium"
                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                    onClick={() => UnarchiveNote(note)}
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