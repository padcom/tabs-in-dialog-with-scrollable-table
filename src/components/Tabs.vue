<template>
  <div class="tabs">
    <TabSelector />
    <div class="tabs-container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TabSelector from './TabSelector.vue'
import { provideTabsContext } from './tabs'

provideTabsContext()
</script>

<style lang="postcss" scoped>
.tabs {
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
}

.tabs-container {
  overflow: hidden;
  border: solid 1px black;
}
</style>
