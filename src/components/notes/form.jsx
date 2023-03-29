import styled from '@emotion/styled';
import { TextField, Box, ClickAwayListener } from '@mui/material';
import { useState, useRef, useContext } from 'react';
import { DataContext } from '../dataProvider';
import { v4 as uuid } from 'uuid';

const Container = styled(Box)`
    display:flex;
    flex-direction: column;
    margin-left: 230px;
    width: 600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    padding: 10px 15px;
    border-radius: 8px;
    border-color:#e0e0e0;
    min-height: 20px;
`;

const note = {
    id: '',
    heading: '',
    text: ''
}

export default function Form() {

    const { setNotes } = useContext(DataContext);

    const [addNote, setAddNote] = useState({ ...note, id: uuid() });

    const [showText, setText] = useState(false);

    const containerRef = useRef();

    const textAreaClick = () => {
        setText(true);
        containerRef.current.style.minHeight = '90px'
    }

    const onClickAway = () => {
        setText(false);
        containerRef.current.style.minHeight = '20px'

        setAddNote({ ...note, id: uuid() });

        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr])
        }
    }

    const onTextChange = (e) => {
        let changedNote = { ...addNote, [e.target.name]: e.target.value };
        setAddNote(changedNote);
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <Container ref={containerRef}>
                {showText &&
                    <TextField
                        placeholder='Title'
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                        value={addNote.heading}
                    />
                }
                <TextField
                    placeholder='Take a note...'
                    multiline
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    maxRows={Infinity}
                    onClick={textAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}