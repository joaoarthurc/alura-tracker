<template>
  <div class="projetos w-100">
    <h1 class="title">
      Projetos
    </h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjeTos'
})
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>