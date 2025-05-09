<script setup>
import { useTheme } from 'vuetify'
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'myCustomDarkTheme' ? 'myCustomLightTheme' : 'myCustomDarkTheme'
}
</script>

<template>
    <v-app-bar>
    <v-toolbar-title>Notes App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon class="ml-2" @click="toggleTheme">
        <v-icon>{{ theme.global.name.value === 'myCustomDarkTheme' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    <v-btn to="/" text class="mx-2">Home</v-btn>
    <v-btn to="/about" text class="mx-2">About</v-btn>
  </v-app-bar>
</template>