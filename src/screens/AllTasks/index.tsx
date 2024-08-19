import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, updateNote } from '../../redux/reducer/notesSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Button, Label } from '../../components';
import { COLOR } from '../../data/StyleGuides';
import styles from './style';

export default function NotesScreen() {
    const [text, setText] = useState('')
    const [editingNoteId, setEditingNoteId] = useState<number | null>(null)
    const dispatch = useDispatch<AppDispatch>()
    const notes = useSelector((state: RootState) => state.notes)

    const handleAddNote = () => {
        if (editingNoteId !== null) {
            dispatch(updateNote({ id: editingNoteId, text }))
            setEditingNoteId(null)
        } else {
            dispatch(addNote(text))
        }
        setText('')
    }

    const handleEditNote = (note: { id: number; text: string }) => {
        setText(note.text)
        setEditingNoteId(note.id)
    }

    const handleDeleteNote = (id: number) => {
        dispatch(deleteNote(id))
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter note"
                placeholderTextColor={COLOR.gray_5}
                value={text}
                onChangeText={setText}
            />
            <Button title={editingNoteId ? 'Update Note' : 'Add Note'} onPress={handleAddNote} />

            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Label style={{ color: COLOR.jetBlack }}>{item.text}</Label>
                        <Button title="Edit"
                            style={styles.buttonStyle}
                            onPress={() => handleEditNote(item)} />
                        <Button title="Delete"
                            style={styles.buttonStyle}
                            onPress={() => handleDeleteNote(item.id)} />
                    </View>
                )}
            />
        </View>
    )
}

