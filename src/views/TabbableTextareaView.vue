<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import { ref } from "vue";
let comment = ref("test value");
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" />
    </form>
  </main>
</template>
