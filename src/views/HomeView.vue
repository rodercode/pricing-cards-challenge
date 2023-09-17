<template>
  <!-- HOME -->
  <div class="px-4 py-12">
    <!-- PRICE CARD -->
    <div class="border-black border-1">
      <header>
        <h1>Free</h1>
      </header>
      <main>
        <!-- PRICE TAG -->
        <span>0</span>
        <span>Greate for startes</span>
        <span>Discover how to create your first projects</span>
        <BaseButtonLink name="Get started" />
        <!-- FEATURE LIST -->
        <ul>
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
