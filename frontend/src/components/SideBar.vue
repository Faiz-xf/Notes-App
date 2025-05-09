<script setup>
import { useNotesStore } from '../../stores/notes';
const store = useNotesStore()
</script>

<template>
    <v-btn flat @click="store.createNote" class = "my-4" color="btn-purple" append-icon="mdi-plus-circle">
        New Note
    </v-btn>
    <v-list class="pa-0">
        <v-list-item v-for = "note in store.notes" :key = "note._id" class = "cursor-pointer py-2" @click = "store.setActiveNote(note._id)" :style="{backgroundColor: note._id==store.activeNote?'#6a1b91':'transparent'}">
            <v-list-item-title v-text="note.title" class="text-left font-weight-bold"></v-list-item-title>
            <template v-slot:append>
            <v-btn flat size = "small" @click = "store.deleteNote(note._id)" color = "btn-red" icon="mdi-delete">
            </v-btn>
        </template>
        </v-list-item>
    </v-list>
</template>