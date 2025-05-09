<script setup>
import SideBar from "./../components/SideBar.vue"
import {onMounted} from "vue"
import { useNotesStore } from "../../stores/notes";

const store = useNotesStore()

onMounted(store.fetchNotes)
</script>

<template>
    <v-container fluid>
      <v-container v-if="store.isLoading" class="d-flex justify-center align-center">
        <v-progress-circular indeterminate></v-progress-circular>
        <span class = "mx-4 text-h6">Loading...</span>
    </v-container>
      <v-row v-else>
        <v-col cols="2" align="center">
          <SideBar />
        </v-col>

        <v-col v-if="store.activeNote" cols="10">
          <v-row justify="end" class="mx-2 my-4">
            <v-btn @click="store.updateNote" class="font-weight-bold" color = "btn-green">Update</v-btn>
          </v-row>

          <v-text-field
            v-model="store.inputTitle"
          ></v-text-field>

          <v-textarea
            v-model="store.inputContent"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
</template>
