<template>
  <div class="tabs">
    <TabSelector />
    <div class="container">
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
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: burlywood
}
</style>
