<script setup>
import { RouterView } from 'vue-router';
import TheNav from './components/TheNav.vue';
import TheFooter from './components/TheFooter.vue'

</script>

<template>
  
  <TheNav />


  <router-view />


  <TheFooter />

</template>

<style scoped>

</style>
