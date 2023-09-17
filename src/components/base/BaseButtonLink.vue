<!-- BUTTON LINK -->
<template>
  <a class="btn-link">{{ name }}</a>
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
