<script setup>
import { useFlash } from "@/composables/useFlash";
let { flash } = useFlash();
</script>

<template>
  <main>
    <button @click="flash('The Title', 'It Works.', 'info')">Click Me</button>
  </main>
</template>
