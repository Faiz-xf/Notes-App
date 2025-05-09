<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <v-layout>
  <v-app-bar>
    <v-toolbar-title>Notes App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/about" text>About</v-btn>
  </v-app-bar>
  <v-main>
  <RouterView/>
  </v-main>
  </v-layout>
</template>
