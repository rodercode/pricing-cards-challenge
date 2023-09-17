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
.free-acc::marker {
  content: "✅";
}

.payed-acc:nth-child(1)::marker {
  content: "✅";
}

.payed-acc:nth-child(2)::marker {
  content: "❌";
}

.payed-acc:nth-child(3)::marker {
  content: "❌";
}
</style>
