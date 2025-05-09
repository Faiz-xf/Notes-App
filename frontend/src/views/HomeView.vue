<script setup>
import SideBar from "./../components/SideBar.vue"
import {onMounted} from "vue"
import { useNotesStore } from "../../stores/notes";

const store = useNotesStore()

onMounted(store.fetchNotes)
</script>

<template>
    <v-container fluid class = "gray-darken-3">
    <v-container v-if="store.isLoading">
        <v-progress-circular indeterminate></v-progress-circular>
        <span class = "mx-4 text-h6">Loading...</span>
    </v-container>
      <v-row v-else class="fill-height">
        <v-col cols="2" align="center">
          <SideBar />
        </v-col>

        <v-col v-if="store.activeNote" cols="10">
          <v-row justify="end" class="mb-4">
            <v-btn @click="store.updateNote" class="font-weight-bold">Update</v-btn>
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
