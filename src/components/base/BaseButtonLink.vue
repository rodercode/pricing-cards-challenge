<!-- BUTTON LINK -->
<template>
  <a>{{ name }}</a>
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

<style scoped>
.btn-link {
  @apply inline-block px-8 py-3
    font-bold text-white transition
    duration-300 cursor-pointer bg-primary-color-base
    rounded-md hover:bg-primary-color-dark
    w-full mb-6;
}
</style>
