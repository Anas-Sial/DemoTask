
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Note {
    id: number
    text: string
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: [] as Note[],
    reducers: {
        addNote: (state, action: PayloadAction<string>) => {
            state.push({ id: Date.now(), text: action.payload })
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            return state.filter(note => note.id !== action.payload)
        },
        updateNote: (state, action: PayloadAction<Note>) => {
            const note = state.find(note => note.id === action.payload.id)
            if (note) {
                note.text = action.payload.text
            }
        },
        getNotes: (state) => state,
    },
})

export const { addNote, deleteNote, updateNote, getNotes } = notesSlice.actions

export default notesSlice.reducer
