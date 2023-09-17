<template>
  <!-- FEATURE ITEM-->
  <li>
    <span>{{ text }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
li::marker {
  content: "✅";
}
</style>
