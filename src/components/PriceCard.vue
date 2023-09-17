<template>
  <!-- PRICE CARD -->
  <div class="px-2 pt-2 pb-6 text-center border-black rounded-md border-1">
    <!-- HEADER -->
    <header class="rounded-md bg-primary-color-light">
      <!-- HEADLINE -->
      <h1 class="py-2 mb-6 text-lg text-white uppercase">{{ title }}</h1>
    </header>
    <!-- MAIN -->
    <main class="px-4">
      <!-- PRICE BOX -->
      <div>
        <!-- PRICE TAG -->
        <span class="text-2xl">{{ priceTag }}</span>
        <!-- PRICE DESCRIPTION -->
        <span class="mb-4 uppercase">{{ priceDescription }}</span>
      </div>

      <!-- BODY TEXT -->
      <span class="mb-2">{{ bodyText }}</span>

      <!-- GET STARTED BUTTON -->
      <BaseButtonLink class="btn-link" name="Get started" />

      <!-- FEATURE LIST -->
      <ul class="ml-4 text-left">
        <FeatureItem :emoji="emoji" text="New projects / mount" />
        <FeatureItem :emoji="emoji" text="Interaction" />
        <FeatureItem :emoji="emoji" text="Assets library" />
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseButtonLink from "../components/base/BaseButtonLink.vue";
import FeatureItem from "./FeatureItem.vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    priceTag: {
      type: String,
      default: "",
    },
    priceDescription: {
      type: String,
      default: "",
    },
    bodyText: {
      type: String,
      default: "",
    },
    emoji: {
      type: String,
      default: "",
    },
  },
  components: {
    BaseButtonLink,
    FeatureItem,
  },
  data() {
    return {};
  },
});
</script>
