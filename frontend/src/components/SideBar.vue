<script setup>
import { useNotesStore } from '../../stores/notes';
const store = useNotesStore()
</script>

<template>
    <v-btn flat @click="store.createNote">
        New Note
    </v-btn>
    <v-list>
        <v-list-item v-for = "note in store.notes" :key = "note._id" class = "cursor-pointer">
            <v-list-item-title v-text="note.title" @click = "store.setActiveNote(note._id)"></v-list-item-title>
            <template v-slot:append>
            <v-icon icon="mdi-delete" flat @click = "store.deleteNote(note._id)" color = "btn-red"></v-icon>
            </template>
        </v-list-item>
    </v-list>
</template>