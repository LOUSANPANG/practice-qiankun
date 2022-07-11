<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">子 Vue Home</RouterLink>
      <RouterLink to="/about">子 Vue About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
a {
  padding: 1em 2em;
  margin-right: 2em;
}
</style>
