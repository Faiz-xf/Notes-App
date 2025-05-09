import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotesStore = defineStore('notes', () => {
    const notes = ref([])
    const inputTitle = ref('')
    const inputContent = ref('')
    const activeNote = ref(null)
    const isLoading = ref(false)

    async function fetchNotes() {
        isLoading.value = true
        const response = await axios.get('api/notes/')
        isLoading.value = false

        notes.value = response.data
    }

    async function createNote() {
        const newNote = {
            title: 'Untitled',
            content: ''
        }

        isLoading.value = true
        const response = await axios.post('api/notes/', newNote)
        isLoading.value = false

        if (response.status != 200)
            return

        await fetchNotes()
        setActiveNote(response.data._id);
    }

    function setActiveNote(id) {
        activeNote.value = id;
        const note = notes.value.find(note => note._id === id);
        inputTitle.value = note.title;
        inputContent.value = note.content
    }

    async function updateNote() {
        const newNote = {
            title: inputTitle.value,
            content: inputContent.value,
        }
        const noteIdx = notes.value.findIndex(note => note._id === activeNote.value);

        isLoading.value = true
        const response = await axios.put(`api/notes/${activeNote.value}`, newNote)
        isLoading.value = false

        if (response.status != 200)
            return

        await fetchNotes()
    }

    async function deleteNote(id) {
        const noteIdx = notes.value.findIndex(note => note._id === id);

        isLoading.value = true
        const response = await axios.delete(`api/notes/${id}`)
        isLoading.value = false

        if (response.status != 200)
            return

        await fetchNotes()

        activeNote.value = null;
        inputTitle.value = '';
        inputContent.value = '';
    }

    return {
        notes, 
        inputTitle,
        inputContent,
        activeNote,
        isLoading,
        fetchNotes,
        createNote,
        setActiveNote,
        updateNote,
        deleteNote,
    }
})