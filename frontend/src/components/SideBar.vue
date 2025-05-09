<script setup>
import { useNotesStore } from '../../stores/notes';
const store = useNotesStore()
</script>
<!-- <template>
    <aside class="w-[250px] min-h-screen bg-gray-900 text-center p-4">

        <button class="bg-green-800 w-full py-2 rounded-md text-amber-100 my-4 cursor-pointer" @click="store.createNote">New Note</button>

        <ul>
            <li
            v-for="note in store.notes"
            :key="note._id"
            @click="store.setActiveNote(note._id)"
            class="py-2 flex justify-between cursor-pointer border-b-2 border-gray-700 hover:bg-gray-600">
                <span class=" text-amber-50">
                    {{note.title}}
                </span>
                <button class="text-red-400" @click.stop="store.deleteNote(note._id)">Delete</button>
            </li>
        </ul>
    </aside>
</template> -->

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