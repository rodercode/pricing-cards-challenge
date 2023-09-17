<template>
  <!-- HOME -->
  <div class="px-4 py-12">
    <!-- PRICE CARD -->
    <div class="text-center border-black border-1">
      <header class="text-white bg-primary-color-light">
        <h1 class="mb-6">Free</h1>
      </header>
      <main>
        <!-- PRICE TAG -->
        <span class="text-2xl">$0</span>
        
        <!-- Description box -->
        <div>
          <span class="mb-2">Great for starters</span>
          <span>Discover how to create your first projects</span>
        </div>

        <BaseButtonLink name="Get started" />
        <!-- FEATURE LIST -->
        <ul class="text-left">
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
