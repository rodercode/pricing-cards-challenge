<template>
  <!-- HOME -->
  <div class="mx-2 my-12">
    <!-- PRICE CARD -->
    <div class="px-2 pt-2 pb-6 text-center border-black rounded-md border-1">
      <header class="text-white rounded-md bg-primary-color-light">
        <h1 class="py-2 mb-6 text-lg uppercase">Free</h1>
      </header>
      <main class="px-4">
        <!-- PRICE TAG -->
        <span class="text-2xl">$0</span>

        <!-- Description box -->
        <div>
          <span class="mb-4">Great for starters</span>
          <span class="mb-2">Discover how to create your first projects</span>
        </div>

        <BaseButtonLink class="w-full py-3 mb-6 rounded-md component-btn" name="Get started" />
        <!-- FEATURE LIST -->
        <ul class="ml-4 text-left list-disc">
          <!-- FEATURE -->
          <li>
            <span>New projects / mount</span>
          </li>
          <li>
            <span>Interaction</span>
          </li>
          <li>
            <span>Assets library</span>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import baselineSignalWifi1Bar from "~icons/ic/baseline-signal-wifi-1-bar";
import BaseButton from "../components/base/BaseButton.vue";
import BaseButtonLink from "../components/base/BaseButtonLink.vue";

export default defineComponent({
  components: {
    baselineSignalWifi1Bar,
    BaseButton,
    BaseButtonLink,
  },
  name: "HomeView",
  data() {
    return {};
  },
});
</script>
