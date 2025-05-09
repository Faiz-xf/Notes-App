<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <v-layout>
  <Navbar/>
  <v-main>
  <RouterView/>
  </v-main>
  </v-layout>
</template>
