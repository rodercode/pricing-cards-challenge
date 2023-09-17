<template>
  <!-- HOME -->
  <div class="flex flex-col gap-8 mx-2 my-12">
    <PriceCard
      title="Free"
      price-tag="0$/month"
      price-description="Great for starters"
      body-text="Discover how to create your first projects."
      sub="free-acc"
    />
    <PriceCard
      title="Lite"
      price-tag="7$/month"
      price-description="For planed projects"
      body-text="Bring your designs to the next level and export them."
      sub="payed-acc"
    />
    <PriceCard
      title="Pro"
      price-tag="12$/month"
      price-description="For professonal use"
      body-text="Enjoy limitless use with interactive export options"
      sub="payed-acc"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import baselineSignalWifi1Bar from "~icons/ic/baseline-signal-wifi-1-bar";
import PriceCard from "../components/PriceCard.vue";

export default defineComponent({
  components: {
    baselineSignalWifi1Bar,
    PriceCard,
  },
  data() {
    return {};
  },
});
</script>
