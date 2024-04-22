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
