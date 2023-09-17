<template>
  <!-- BUTTON LINK -->
  <a
    class="inline-block px-8 py-2 font-bold text-white transition duration-300 cursor-pointer bg-primary-color-base bg-primary-color hover:bg-primary-color-dark"
    >{{ name }}</a
  >
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
});
</script>
