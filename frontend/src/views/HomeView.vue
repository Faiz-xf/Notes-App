<script setup>
import SideBar from "./../components/SideBar.vue"
import {onMounted} from "vue"
import { useNotesStore } from "../../stores/notes";

const store = useNotesStore()

onMounted(store.fetchNotes)
</script>

<!-- <template>
  <div v-if="store.isLoading" class="bg-gray-700 min-h-screen flex justify-center items-center font-bold text-3xl text-white">Loading ...</div>
  <div v-else class="flex min-h-screen bg-gray-800">
    <SideBar />
    <main v-if="store.activeNote" class="flex-1 w-full py-6 px-4">
      <div class = "flex justify-end">
      <button @click = "store.updateNote" class="bg-green-600 px-4 py-2 rounded-md font-bold text-white">Update</button>
    </div>
      <input v-model="store.inputTitle" type = "text" class = "my-2 w-full font-bold text-3xl text-white border-b-2 border-gray-600 outline-none focus:border-white"/>
      <textarea v-model="store.inputContent" class = "my-2 w-full h-full text-white outline-none"></textarea>
    </main>
  </div>
</template> -->


<template>
    <v-container fluid class = "gray-darken-3">
      <v-row v-if="store.isLoading" justify="center" align="center" class="fill-height">
        <v-col cols="auto">
          <v-progress-circular indeterminate color="white"></v-progress-circular>
          <div class="mt-2 text-center font-weight-bold text-h6">Loading ...</div>
        </v-col>
      </v-row>

      <v-row v-else class="fill-height">
        <v-col cols="2" class="pa-0">
          <SideBar />
        </v-col>

        <v-col cols="10" class="pa-4">
          <v-row justify="end" class="mb-4">
            <v-btn color="green" @click="store.updateNote" class="font-weight-bold">Update</v-btn>
          </v-row>

          <v-text-field
            v-model="store.inputTitle"
            label="Title"
            class="my-2"
            outlined
            color="white"
          ></v-text-field>

          <v-textarea
            v-model="store.inputContent"
            label="Content"
            class="my-2"
            outlined
            color="white"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
</template>
