<template>
  <button class="component-btn" @click="handleButtonClick">
    <slot>
      {{ name }}
    </slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      propValue: this.name,
    };
  },
  methods: {
    handleButtonClick() {
      console.log("Button was pressed");
    },
  },
});
</script>
